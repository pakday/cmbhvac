import { load } from "cheerio";

/**
 * Removes all empty div elements and other empty containers
 */
export function removeEmptyDivs(html: string): string {
  // typings don't include decodeEntities; cast to any
  const $ = load(html, { decodeEntities: false } as any);

  // Remove empty divs, spans, sections, etc
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
  // Keep removing until no more empty elements found
  while (removed) {
    removed = false;
    emptySelectors.forEach((selector) => {
      $(selector).each((_, elem) => {
        const $elem = $(elem);
        const text = $elem.text().trim();
        const children = $elem.children().length;

        if (!text && children === 0) {
          $elem.remove();
          removed = true;
        }
      });
    });
  }

  return $.html();
}
