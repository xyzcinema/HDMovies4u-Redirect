import { createFileRoute } from "@tanstack/react-router";
import { BrandPage } from "@/components/site/BrandPage";
import { directoryHead, movieDirectory } from "@/data/directory";
export const Route = createFileRoute("/")({
  head: () => directoryHead(true),
  component: () => <BrandPage brand={movieDirectory} />,
});
