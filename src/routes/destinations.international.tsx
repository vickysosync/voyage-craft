import { createFileRoute } from "@tanstack/react-router";
import { DestinationsPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/destinations/international")({
  head: () => ({
    meta: [
      { title: "International Destinations — Bandhan Tours" },
      { name: "description", content: "Thailand, Bali, Dubai, Maldives, Europe and more." },
      { property: "og:title", content: "International Destinations — Bandhan Tours" },
      { property: "og:description", content: "Thailand, Bali, Dubai, Maldives, Europe and more." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><DestinationsPage category="International" /></SiteLayout>;
}
