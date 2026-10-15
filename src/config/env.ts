type EnvRecord = Record<string, string | undefined>;

const env = import.meta.env as unknown as EnvRecord;

function read(name: string, fallback: string): string {
  const value = env[`VITE_${name}`];
  return value && value.trim() !== "" ? value.trim() : fallback;
}

/** Ensures a base URL always ends with exactly one trailing slash. */
function normalizeBase(url: string): string {
  return url.replace(/\/+$/, "") + "/";
}

export const HDMOVIES4U_SITEURL = normalizeBase(read("HDMOVIES4U_SITEURL", "https://hdmovies4u.fun"));
export const TELEGRAM_HDMOVIES4U = read("TELEGRAM_HDMOVIES4U", "https://t.me/movies4uofficiaI");

/** Joins a path onto a base site URL. */
export const siteLink = (base: string, path = ""): string =>
  normalizeBase(base) + path.replace(/^\/+/, "");
