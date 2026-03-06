import { load } from "cheerio";

/**
 * Removes all attributes from HTML tags except href
 * Keeps HTML structure clean and minimal
 */
export function stripAttributes(html: string): string {
  // cast to any for decodeEntities option
  const $ = load(html, { decodeEntities: false } as any);

  // Get all elements and remove all attributes except href
  $("*").each((_, elem) => {
    const $elem = $(elem);
    const href = $elem.attr("href");

    // Get all attribute names
    const attribs = (elem as any).attribs || {};
    const attrNames = Object.keys(attribs);

    // Remove all attributes
    attrNames.forEach((attr) => {
      $elem.removeAttr(attr);
    });

    // Re-add href if it existed
    if (href) {
      $elem.attr("href", href);
    }
  });

  return $.html();
}
