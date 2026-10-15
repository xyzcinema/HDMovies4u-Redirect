import { createFileRoute } from "@tanstack/react-router";
import { BrandPage } from "@/components/site/BrandPage";
import { directoryHead, movieDirectory } from "@/data/directory";

export const Route = createFileRoute("/hdmovies4u")({
  head: () => directoryHead(),
  component: () => <BrandPage brand={movieDirectory} />,
});