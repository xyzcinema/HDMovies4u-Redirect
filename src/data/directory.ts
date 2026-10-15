import { brands } from "./brands";

const retainedBrand = brands[0];
if (!retainedBrand) throw new Error("The movie directory is missing.");
export const movieDirectory = retainedBrand;

export function directoryHead(home = false) {
  const title = home ? "HDmovies4u — Official Movie & Series Directory" : movieDirectory.title;
  return {
    meta: [
      { title },
      { name: "description", content: movieDirectory.description },
      { name: "keywords", content: movieDirectory.tags.join(", ") },
      { property: "og:title", content: title },
      { property: "og:description", content: movieDirectory.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: movieDirectory.description },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "WebSite", name: movieDirectory.name,
      url: movieDirectory.siteUrl, description: movieDirectory.description, inLanguage: "en",
    }) }],
  };
}