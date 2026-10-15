import { Link } from "@tanstack/react-router";


export function SiteHeader({ nameA, nameB }: { nameA: string; nameB: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
        <Link to="/" aria-label={`${nameA}${nameB} home`} className="flex min-w-0 items-center">
          <img src="/hdmovies4u-logo.png" alt={`${nameA}${nameB}`} width={1920} height={480} className="h-auto w-44 max-w-full object-contain sm:w-64" />
        </Link>
        <span className="flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[9px] font-bold  text-primary uppercase sm:px-4 sm:py-2 sm:text-[11px] ">
          <span className="size-1.5 animate-pulse rounded-full bg-primary sm:size-2" />
          Daily Updated
        </span>
      </div>
    </header>
  );
}
