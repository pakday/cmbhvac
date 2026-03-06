/**
 * Formats whitespace and removes excessive newlines for readable, structured HTML
 */
export function formatWhitespace(html: string): string {
  // Remove comments (safety: in case some slipped through)
  let formatted = html.replace(/<!--[\s\S]*?-->/g, "");

  // Remove multiple consecutive newlines, replace with single newline
  formatted = formatted.replace(/\n\s*\n+/g, "\n");

  // Remove trailing whitespace from each line
  formatted = formatted
    .split("\n")
    .map((line) => line.replace(/\s+$/, ""))
    .join("\n");

  // Remove empty lines with just whitespace
  formatted = formatted
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .join("\n");

  // Clean up excessive spacing within tags
  formatted = formatted.replace(/>\s+</g, "><");

  // Add proper newlines after closing tags for readability
  formatted = formatted
    .replace(/></g, ">\n<")
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .join("\n");

  return formatted;
}
