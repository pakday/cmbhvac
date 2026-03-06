import { load } from "cheerio";

/**
 * Removes all script tags, style tags, and their contents from HTML
 * Also removes noscript tags as they're typically fallbacks for disabled JS
 */
export function removeScriptsAndStyles(html: string): string {
  const $ = load(html, { decodeEntities: false });

  // Remove script tags and content
  $("script").remove();

  // Remove style tags and content
  $("style").remove();

  // Remove noscript tags
  $("noscript").remove();

  // Remove SVG with scripts (data URLs in SVG can contain scripts)
  $("svg").each((_, elem) => {
    const $elem = $(elem);
    if ($elem.html()?.includes("script")) {
      $elem.remove();
    }
  });

  return $.html();
}
