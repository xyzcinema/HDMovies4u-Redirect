import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: ({ request }) => {
    const origin = new URL(request.url).origin.replace(/&/g, "&amp;");
    const entries = ["/", "/hdmovies4u"].map(path => `<url><loc>${origin}${path}</loc><changefreq>daily</changefreq></url>`).join("");
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
      headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
    });
  } } },
});