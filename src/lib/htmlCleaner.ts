import { removeScriptsAndStyles } from "./removeScriptsAndStyles";
import { removeBase64 } from "./removeBase64";
import { cleanAttributes } from "./cleanAttributes";
import { removeLinkTagsAndComments } from "./removeLinkTagsAndComments";
import { stripAttributes } from "./stripAttributes";
import { removeEmptyDivs } from "./removeEmptyDivs";
import { minifyHTML } from "./minifyHTML";
import { load } from "cheerio";

/**
 * Main HTML cleaner orchestrator
 * Applies multiple cleaning passes to create lightweight, AI-friendly HTML
 */
export function cleanHTML(html: string): string {
  let cleaned = html;

  // Step 1: Remove comments and link tags
  cleaned = removeLinkTagsAndComments(cleaned);

  // Step 2: Remove scripts and styles
  cleaned = removeScriptsAndStyles(cleaned);

  // Step 3: Remove base64 encoded content and data URLs
  cleaned = removeBase64(cleaned);

  // Step 4: Clean tracking/event attributes
  cleaned = cleanAttributes(cleaned);

  // Step 5: Remove empty tags and clean up
  cleaned = removeEmptyTags(cleaned);

  // Step 6: Remove empty divs
  cleaned = removeEmptyDivs(cleaned);

  // Step 7: Strip all attributes except href
  cleaned = stripAttributes(cleaned);

  // Step 8: Remove empty divs again (after attribute stripping)
  cleaned = removeEmptyDivs(cleaned);

  // Step 9: Minify and compress HTML
  cleaned = minifyHTML(cleaned);

  return cleaned;
}

/**
 * Remove empty tags that don't carry content
 */
function removeEmptyTags(html: string): string {
  const $ = load(html, { decodeEntities: false });

  const emptyTagsToRemove = [
    "script",
    "style",
    'meta[name="viewport"]',
    'link[rel="preload"]',
  ];

  emptyTagsToRemove.forEach((selector) => {
    $(selector).remove();
  });

  // Remove div, span, section, article, etc with no content
  $("div, span, section, article, aside, header, footer, nav").each(
    (_, elem) => {
      const $elem = $(elem);
      const text = $elem.text().trim();
      if (!text && $elem.children().length === 0) {
        if (!$elem.attr("id") && !$elem.attr("data-keeps")) {
          $elem.remove();
        }
      }
    },
  );

  return $.html();
}
