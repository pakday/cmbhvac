/**
 * Minifies HTML by removing all unnecessary whitespace
 * Produces compact single-line output
 */
export function minifyHTML(html: string): string {
  // Remove comments
  let minified = html.replace(/<!--[\s\S]*?-->/g, "");

  // Remove newlines and extra whitespace
  minified = minified.replace(/\s+/g, " ");

  // Remove spaces around tags
  minified = minified.replace(/>\s+</g, "><");

  // Remove leading/trailing spaces
  minified = minified.trim();

  return minified;
}
