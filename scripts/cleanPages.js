#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

/**
 * Removes stylesheet links and HTML comments
 */
function removeLinkTagsAndComments(html) {
  let cleaned = html.replace(/<!--[\s\S]*?-->/g, "");
  const $ = load(cleaned, { decodeEntities: false });
  $('link[rel="stylesheet"]').remove();
  $('link[rel="preload"]').remove();
  $('link[rel="prefetch"]').remove();
  $('link[rel="alternate"]').remove();
  $('link[rel="manifest"]').remove();
  $('link[rel="apple-touch-icon"]').remove();
  $('link[rel="icon"]').remove();
  return $.html();
}

/**
 * Removes all script tags, style tags, and inline bloat
 */
function removeScriptsAndStyles(html) {
  const $ = load(html, { decodeEntities: false });
  $("script").remove();
  $("style").remove();
  $("noscript").remove();
  return $.html();
}

/**
 * Removes base64 encoded content from images and data URLs
 */
function removeBase64(html) {
  const $ = load(html, { decodeEntities: false });
  $("img").each((_, elem) => {
    const src = $(elem).attr("src");
    if (src && src.startsWith("data:")) {
      $(elem).remove();
    }
  });
  $("source").each((_, elem) => {
    const src = $(elem).attr("src");
    if (src && src.startsWith("data:")) {
      $(elem).remove();
    }
  });
  $("iframe").each((_, elem) => {
    const src = $(elem).attr("src");
    if (src && src.startsWith("data:")) {
      $(elem).remove();
    }
  });
  $("[style]").each((_, elem) => {
    const style = $(elem).attr("style") || "";
    if (style.includes("data:")) {
      const cleanedStyle = style.replace(/background[^;]*data:[^;]*;?/g, "");
      if (cleanedStyle.trim()) {
        $(elem).attr("style", cleanedStyle);
      } else {
        $(elem).removeAttr("style");
      }
    }
  });
  return $.html();
}

/**
 * Cleans attributes: removes inline handlers, tracking, styles
 */
function cleanAttributes(html) {
  const $ = load(html, { decodeEntities: false });
  const attrsToRemove = [
    "onclick",
    "onload",
    "onerror",
    "onmouseover",
    "onmouseout",
    "onmousemove",
    "onmouseenter",
    "onmouseleave",
    "onfocus",
    "onblur",
    "onchange",
    "onsubmit",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onwheel",
    "ondrop",
    "ondrag",
    "data-reactroot",
    "data-react-dom-version",
    "data-react-fiber",
    "data-tracking",
    "data-analytics",
    "data-metric",
    "data-gtm",
    "data-ga",
    "jsname",
    "class",
  ];
  $("*").removeAttr("style");
  $("*").each((_, elem) => {
    attrsToRemove.forEach((attr) => $(elem).removeAttr(attr));
  });
  return $.html();
}

/**
 * Strips all attributes except href
 */
function stripAttributes(html) {
  // Use regex to keep only href attributes
  let stripped = html;

  // Replace tags: keep only href if present
  stripped = stripped.replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/);
    const href = hrefMatch ? ` href="${hrefMatch[1]}"` : "";
    return `<${tag}${href}>`;
  });

  return stripped;
}

/**
 * Removes all empty div elements
 */
function removeEmptyDivs(html) {
  const $ = load(html, { decodeEntities: false });
  const emptySelectors = [
    "div",
    "span",
    "section",
    "article",
    "aside",
    "header",
    "footer",
    "nav",
    "main",
  ];
  let removed = true;
  while (removed) {
    removed = false;
    emptySelectors.forEach((selector) => {
      $(selector).each((_, elem) => {
        const $elem = $(elem);
        const text = $elem.text().trim();
        if (!text && $elem.children().length === 0) {
          $elem.remove();
          removed = true;
        }
      });
    });
  }
  return $.html();
}

/**
 * Minifies HTML by removing all whitespace
 */
function minifyHTML(html) {
  let minified = html.replace(/<!--[\s\S]*?-->/g, "");
  minified = minified.replace(/\s+/g, " ");
  minified = minified.replace(/>\s+</g, "><");
  return minified.trim();
}

/**
 * Main HTML cleaner
 */
function cleanHTML(html) {
  let cleaned = html;
  cleaned = removeLinkTagsAndComments(cleaned);
  cleaned = removeScriptsAndStyles(cleaned);
  cleaned = removeBase64(cleaned);
  cleaned = cleanAttributes(cleaned);
  cleaned = removeEmptyDivs(cleaned);
  cleaned = stripAttributes(cleaned);
  cleaned = removeEmptyDivs(cleaned);
  cleaned = minifyHTML(cleaned);
  return cleaned;
}

const DATA_DIR = path.join(__dirname, "../data/raw-pages");
const OUTPUT_DIR = path.join(__dirname, "../data/cleaned-pages");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function processAllPages() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".html"));

  if (files.length === 0) {
    console.log("No HTML files found in data/raw-pages");
    return;
  }

  console.log(`\nFound ${files.length} HTML files. Starting cleaning...\n`);

  let successCount = 0;
  let errorCount = 0;

  files.forEach((file) => {
    try {
      const inputPath = path.join(DATA_DIR, file);
      const outputPath = path.join(OUTPUT_DIR, file);

      const html = fs.readFileSync(inputPath, "utf-8");
      const originalSize = html.length;

      const cleaned = cleanHTML(html);
      const cleanedSize = cleaned.length;

      fs.writeFileSync(outputPath, cleaned, "utf-8");

      const reduction = ((1 - cleanedSize / originalSize) * 100).toFixed(1);
      console.log(`✓ ${file}`);
      console.log(
        `  ${originalSize} bytes → ${cleanedSize} bytes (${reduction}% reduction)`,
      );

      successCount++;
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n✅ Cleaning complete!`);
  console.log(`Cleaned ${successCount} pages, ${errorCount} errors`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

processAllPages();
