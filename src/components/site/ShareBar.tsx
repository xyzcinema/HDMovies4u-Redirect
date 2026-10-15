const nets = [
  { key: "telegram", label: "Share", cls: "share-telegram" },
  { key: "twitter", label: "Post", cls: "share-twitter" },
  { key: "facebook", label: "Share", cls: "share-facebook" },
  { key: "reddit", label: "Share", cls: "share-reddit" },
  { key: "whatsapp", label: "Share", cls: "share-whatsapp" },
] as const;

function link(key: string, url: string, title: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  switch (key) {
    case "telegram":
      return `https://t.me/share/url?url=${u}&text=${t}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case "reddit":
      return `https://reddit.com/submit?url=${u}&title=${t}`;
    default:
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`;
  }
}

export function ShareBar({ name, url }: { name: string; url: string }) {
  return (
    <div className="panel flex flex-wrap items-center gap-4 p-4 sm:gap-5 sm:p-5">
      <div className="border-l-2 border-primary pl-4">
        <b className="block text-sm text-primary">Share {name}</b>
        <small className="text-xs text-muted-foreground">to your friends</small>
      </div>
      <div className="flex flex-wrap gap-2">
        {nets.map((n) => (
          <a
            key={n.key}
            href={link(n.key, url, name)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${n.cls} rounded-full px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-[13px] font-semibold text-foreground transition hover:scale-105`}
          >
            {n.label}
          </a>
        ))}
      </div>
    </div>
  );
}