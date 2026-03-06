import { load } from "cheerio";

/**
 * Removes base64 encoded content from HTML
 * Targets: img src, svg data, data URLs, and inline images
 */
export function removeBase64(html: string): string {
  const $ = load(html, { decodeEntities: false });

  // Remove images with base64 data URLs
  $("img").each((_, elem) => {
    const $elem = $(elem);
    const src = $elem.attr("src");
    if (src && src.startsWith("data:")) {
      $elem.remove();
    }
  });

  // Remove source tags with base64 data URLs
  $("source").each((_, elem) => {
    const $elem = $(elem);
    const src = $elem.attr("src");
    if (src && src.startsWith("data:")) {
      $elem.remove();
    }
  });

  // Remove iframe with data URLs
  $("iframe").each((_, elem) => {
    const $elem = $(elem);
    const src = $elem.attr("src");
    if (src && src.startsWith("data:")) {
      $elem.remove();
    }
  });

  // Remove background images with base64
  $("[style]").each((_, elem) => {
    const $elem = $(elem);
    const style = $elem.attr("style") || "";
    if (style.includes("data:")) {
      const cleanedStyle = style.replace(/background[^;]*data:[^;]*;?/g, "");
      if (cleanedStyle.trim()) {
        $elem.attr("style", cleanedStyle);
      } else {
        $elem.removeAttr("style");
      }
    }
  });

  return $.html();
}
