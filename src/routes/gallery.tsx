import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Travel Gallery — Bandhan Tours" },
      { name: "description", content: "Beaches, mountains, cities and culture from our journeys." },
      { property: "og:title", content: "Travel Gallery — Bandhan Tours" },
      { property: "og:description", content: "Beaches, mountains, cities and culture from our journeys." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><GalleryPage /></SiteLayout>;
}
