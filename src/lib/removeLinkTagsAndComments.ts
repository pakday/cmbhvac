import { load } from "cheerio";

/**
 * Removes stylesheet links and HTML comments
 * Also removes other unnecessary link tags and meta tags
 */
export function removeLinkTagsAndComments(html: string): string {
  // Remove HTML comments first (before parsing to avoid issues)
  let cleaned = html.replace(/<!--[\s\S]*?-->/g, "");

  // cast to any because CheerioOptions missing decodeEntities
  const $ = load(cleaned, { decodeEntities: false } as any);

  // Remove stylesheet links
  $('link[rel="stylesheet"]').remove();

  // Remove other link preload/prefetch (optimization tags)
  $('link[rel="preload"]').remove();
  $('link[rel="prefetch"]').remove();

  // Remove alternate language links (unnecessary for AI)
  $('link[rel="alternate"]').remove();

  // Remove manifest and other bloat links
  $('link[rel="manifest"]').remove();
  $('link[rel="apple-touch-icon"]').remove();
  $('link[rel="shortcut icon"]').remove();
  $('link[rel="icon"]').remove();

  return $.html();
}
