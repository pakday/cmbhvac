import { load } from "cheerio";

/**
 * Removes inline event handlers, style attributes, and other bloat
 * Keeps clean semantic HTML
 */
export function cleanAttributes(html: string): string {
  // Cheerio's TypeScript definitions currently don't include `decodeEntities` option
  // so cast to any to avoid type errors while still passing the config.
  const $ = load(html, { decodeEntities: false } as any);

  // List of attributes to remove (event handlers and tracking)
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
    "data-qa",
    "jsname",
    "class", // Remove class as it contains styling info
  ];

  // Remove inline style attributes
  $("*").removeAttr("style");

  // Remove event handler attributes
  $("*").each((_, elem) => {
    const $elem = $(elem);
    attrsToRemove.forEach((attr) => {
      $elem.removeAttr(attr);
    });
  });

  return $.html();
}
