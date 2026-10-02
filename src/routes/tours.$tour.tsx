import { createFileRoute } from "@tanstack/react-router";
import { TourDetail } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/tours/$tour")({
  head: () => ({
    meta: [
      { title: "Tour Package — Bandhan Tours" },
      { name: "description", content: "Day-wise itinerary, inclusions and enquiry for this tour package." },
      { property: "og:title", content: "Tour Package — Bandhan Tours" },
      { property: "og:description", content: "Day-wise itinerary, inclusions and enquiry for this tour package." },
    ],
  }),
  component: Page,
});

function Page() {
  const { tour } = Route.useParams();
  return <SiteLayout><TourDetail id={tour} /></SiteLayout>;
}
