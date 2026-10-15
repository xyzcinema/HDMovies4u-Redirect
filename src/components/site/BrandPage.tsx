import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  LayoutGrid,
  Play,
  RefreshCcw,
  Send,
  Tv,
  Activity,
} from "lucide-react";
import type { Brand } from "@/data/brands";
import { SiteHeader } from "./SiteHeader";
import { ShareBar } from "./ShareBar";

const tones = {
  green: {
    ring: "source-tone-0 source-tone-1",
    text: "source-tone-2",
    chip: "source-tone-3 source-tone-4",
  },
  violet: {
    ring: "source-tone-5 source-tone-6",
    text: "source-tone-7",
    chip: "source-tone-8 source-tone-9",
  },
  amber: {
    ring: "source-tone-10 source-tone-11",
    text: "source-tone-12",
    chip: "source-tone-13 source-tone-14",
  },
  pink: {
    ring: "source-tone-15 source-tone-16",
    text: "source-tone-17",
    chip: "source-tone-18 source-tone-19",
  },
} as const;

const icons: ComponentType<{ className?: string }>[] = [Play, RefreshCcw, Activity, Tv];

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <Icon className="size-4 text-muted-foreground" />
      <span className="label-eyebrow">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function BrandPage({ brand }: { brand: Brand }) {

  return (
    <div className="min-h-screen">
      <SiteHeader nameA={brand.nameA} nameB={brand.nameB} />

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-5 sm:pb-24">
        {/* Hero */}
        <section className="py-12 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold  text-primary uppercase sm:px-5 sm:text-[11px] ">
            ☆ The Official {brand.name} Web Directory
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold  sm:mt-8 sm:text-6xl">
            {brand.heroTitle}
            <br />
            <span className="text-gradient-brand">{brand.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base">{brand.heroSub}</p>

          <div className="panel mx-auto mt-10 grid max-w-2xl grid-cols-2 divide-x divide-y divide-border sm:mt-12 sm:grid-cols-4 sm:divide-y-0">
            {brand.stats.map((s) => (
              <div key={s.label} className="px-3 py-5 sm:px-4 sm:py-6">
                <div className="text-xl font-extrabold text-foreground sm:text-2xl">
                  {s.value.slice(0, -1)}
                  <span className="text-primary">{s.value.slice(-1)}</span>
                </div>
                <div className="label-eyebrow mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href={brand.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-3.5 text-base font-bold sm:mt-10 sm:px-8 sm:py-4 sm:text-lg text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
          >
            View Full Site <ArrowRight className="size-5" />
          </a>
        </section>

        {/* Quick access */}
        <section className="py-8">
          <SectionLabel icon={LayoutGrid}>Quick Access</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {brand.quickAccess.map((q, i) => {
              const tone = tones[q.tone];
              const Icon = icons[i % icons.length] ?? Play;
              return (
                <a
                  key={q.name + i}
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-4 sm:gap-4 sm:p-5 transition hover:-translate-y-1 ${tone.ring}`}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-card">
                    <Icon className={`size-5 ${tone.text}`} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block font-bold ${tone.text}`}>{q.name}</span>
                    <span className="block text-sm text-muted-foreground">{q.desc}</span>
                    <span
                      className={`mt-2 inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold st uppercase ${tone.chip}`}
                    >
                      {q.badge}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>

          <a
            href={brand.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-4 rounded-2xl border source-tone-20 source-tone-21 p-4 transition hover:-translate-y-1 sm:gap-5 sm:p-6"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-card sm:size-14">
              <Send className="size-6 source-tone-22" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-extrabold sm:text-xl  source-tone-23 uppercase">
                Join Our Telegram Channel
              </span>
              <span className="block text-sm text-muted-foreground">
                Get instant daily alerts — Bollywood, Hollywood & South Indian movie updates
              </span>
              <span className="mt-2 inline-block rounded-md border source-tone-24 px-2 py-0.5 text-[10px] font-bold st source-tone-25 uppercase">
                Free · Instant · Daily
              </span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
          </a>
        </section>

        {/* About */}
        <section className="py-12">
          <SectionLabel icon={FileText}>About {brand.name}</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="panel border-l-2 border-l-primary p-5 sm:p-7">
              <h2 className="text-lg font-bold text-primary sm:text-xl">
                Welcome to {brand.name} — Entertainment Library &amp; Updates
              </h2>
              <div className="mt-5 space-y-4 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">{brand.name}</strong> is the ultimate
                  destination for movie lovers, offering a wide range of films in various languages
                  and quality options — Bollywood hits, regional films and international
                  blockbusters in one directory.
                </p>
                <p>
                  The library spans Hindi, Punjabi, Marathi, Tamil, Telugu, Malayalam and English,
                  plus a large collection of Hindi Dubbed and Dual Audio titles with subtitles.
                </p>
                <p>
                  Content is covered in {brand.quality} formats, updated daily with the latest
                  releases and multiple high-speed mirrors.
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 text-xs leading-7">
                <span className="label-eyebrow mr-2">Quick Filters:</span>
                {brand.tags.slice(0, 12).map((t) => (
                  <span key={t + brand.tags.indexOf(t)} className="mr-3 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>

            <article className="panel border-l-2 source-tone-26 p-5 sm:p-7">
              <h2 className="text-lg font-bold source-tone-27 sm:text-xl">
                Why {brand.name} Stands Out
              </h2>
              <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-foreground">Completely Free Access:</strong> no paywalls,
                  no monthly fees.
                </li>
                <li>
                  <strong className="text-foreground">No Sign-Up Required:</strong> jump straight
                  into watching.
                </li>
                <li>
                  <strong className="text-foreground">Massive Content Library:</strong> latest
                  releases and classics across every genre.
                </li>
                <li>
                  <strong className="text-foreground">No Geographic Restrictions:</strong> the same
                  catalog anywhere in the world.
                </li>
                <li>
                  <strong className="text-foreground">HD {brand.verb}:</strong> {brand.quality}{" "}
                  quality with crisp visuals and clear sound.
                </li>
                <li>
                  <strong className="text-foreground">User-Friendly Interface:</strong> simple, fast
                  and easy to navigate on any device.
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 text-xs leading-7">
                <span className="label-eyebrow mr-2">Explore Tags:</span>
                {brand.tags.slice(12).map((t) => (
                  <span key={t + brand.tags.indexOf(t)} className="mr-3 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Share */}
        <section className="py-8">
          <ShareBar name={brand.name} url={brand.siteUrl} />
        </section>

      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <h3 className="text-sm font-semibold text-foreground">Tags:</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {brand.tags.map((t, index) => (
              <span
                key={index}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}