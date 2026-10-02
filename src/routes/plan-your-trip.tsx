import { createFileRoute } from "@tanstack/react-router";
import { PlannerPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/plan-your-trip")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip — Bandhan Tours" },
      { name: "description", content: "Tell us where, when and how you like to travel and get matched packages." },
      { property: "og:title", content: "Plan Your Trip — Bandhan Tours" },
      { property: "og:description", content: "Tell us where, when and how you like to travel and get matched packages." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><PlannerPage /></SiteLayout>;
}
