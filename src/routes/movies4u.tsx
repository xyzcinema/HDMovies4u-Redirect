import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/movies4u")({
  beforeLoad: () => { throw redirect({ to: "/hdmovies4u", statusCode: 301 }); },
});