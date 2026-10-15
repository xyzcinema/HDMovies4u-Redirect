import {
  HDMOVIES4U_SITEURL,
  TELEGRAM_HDMOVIES4U,
  siteLink,
} from "@/config/env";

export type Brand = {
  slug: string;
  name: string;
  nameA: string;
  nameB: string;
  path: string;
  siteUrl: string;
  telegramUrl: string;
  verb: "Streaming" | "Downloading";
  tagline: string;
  title: string;
  description: string;
  heroTitle: string;
  heroAccent: string;
  heroSub: string;
  stats: { value: string; label: string }[];
  quality: string;
  tags: string[];
  quickAccess: {
    name: string;
    desc: string;
    badge: string;
    href: string;
    tone: "green" | "violet" | "amber" | "pink";
  }[];
};

export const brands: Brand[] = [
  {
    slug: "hdmovies4u",
    name: "HDmovies4u",
    nameA: "HDmovies",
    nameB: "4u",
    path: "/hdmovies4u",
    siteUrl: HDMOVIES4U_SITEURL,
    telegramUrl: TELEGRAM_HDMOVIES4U,
    verb: "Downloading",
    tagline: "HDmovies4u : Download Movies, Series in HD",
    title: "HDmovies4u — Download Movies, Series in HD",
    description:
      "HDmovies4u is your ultimate destination to download the latest Bollywood, Hollywood, South Indian, Hindi Dubbed, Web Series, and Anime in 480p, 720p & 1080p Quality for free.",
    heroTitle: "The Ultimate",
    heroAccent: "Download Hub",
    heroSub:
      "Bollywood · Hollywood · South Indian · Hindi Dubbed · Dual Audio · Web Series & Anime — 480p, 720p and 1080p, updated daily.",
    stats: [
      { value: "10K+", label: "Movies Listed" },
      { value: "HD", label: "Max Quality" },
      { value: "10+", label: "Languages" },
      { value: "24/7", label: "Updates" },
    ],
    quality: "480p, 720p & 1080p and Full HD",
    quickAccess: [
      {
        name: "HDmovies4u",
        desc: "Download Movies & Series In HD Quality",
        badge: "Collection Hub",
        href: siteLink(HDMOVIES4U_SITEURL, ""),
        tone: "green",
      },
      {
        name: "Privacy-Policy",
        desc: "About Our Privacy-Policy",
        badge: "Legal Info",
        href: siteLink(HDMOVIES4U_SITEURL, "privacy-policy"),
        tone: "violet",
      },
      {
        name: "Disclaimer",
        desc: "Read Our Disclaimer & Terms",
        badge: "Legal Terms",
        href: siteLink(HDMOVIES4U_SITEURL, "disclaimer"),
        tone: "amber",
      },
      {
        name: "How To Download",
        desc: "Step-by-Step Download Guide",
        badge: "Guide",
        href: siteLink(HDMOVIES4U_SITEURL, "How-To-Downlaod"),
        tone: "pink",
      },
    ],
    tags: [
      "HDmovies4u",
      "HDmovies4u official",
      "HDmovies4u.fun",
      "HDmovies4u fun",
      "HDmovies4u",
      "HDmovies4u download",
      "HDmovies4u pro",
      "HDmovies4u apk",
      "HDmovies4u",
      "HDmovies4u fun",
      "All HDmovies4u",
      "South movies",
      "HDmovies4u app",
      "HDmovies4u movies",
      "HDmovies4u premium",
      "best movie website",
      "480p movies",
      "720p movies",
      "1080p movies",
      "full hd movies",
      "HDmovies4u downloading",
      "HDmovies4u watch online",
      "HDmovies4u online downloading",
      "HDmovies4u fast downloading",
      "free movie downloading",
      "HDmovies4u south hindi dubbed",
      ],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
