import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bandhan Tours — Domestic & International Holidays" },
      { name: "description", content: "Curated domestic and international tour packages from ₹18,500 per person by Bandhan Tours, Thane." },
      { property: "og:title", content: "Bandhan Tours — Domestic & International Holidays" },
      { property: "og:description", content: "Curated domestic and international tour packages from ₹18,500 per person by Bandhan Tours, Thane." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><HomePage /></SiteLayout>;
}
