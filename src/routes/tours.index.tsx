import { createFileRoute } from "@tanstack/react-router";
import { ToursPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/tours/")({
  validateSearch: (s: Record<string, unknown>): { destination?: string; budget?: string; month?: string; travellers?: string } => {
    const out: { destination?: string; budget?: string; month?: string; travellers?: string } = {};
    for (const k of ["destination", "budget", "month", "travellers"] as const) if (typeof s[k] === "string" && s[k]) out[k] = s[k] as string;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Tours & Packages — Bandhan Tours" },
      { name: "description", content: "Filter and compare Bandhan Tours holiday packages by destination, budget and duration." },
      { property: "og:title", content: "Tours & Packages — Bandhan Tours" },
      { property: "og:description", content: "Filter and compare Bandhan Tours holiday packages by destination, budget and duration." },
    ],
  }),
  component: Page,
});

function Page() {
  const search = Route.useSearch();
  return <SiteLayout><ToursPage search={search} /></SiteLayout>;
}
