import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Bandhan Tours" },
      { name: "description", content: "The story, approach and travel philosophy behind Bandhan Tours." },
      { property: "og:title", content: "About Us — Bandhan Tours" },
      { property: "og:description", content: "The story, approach and travel philosophy behind Bandhan Tours." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><AboutPage /></SiteLayout>;
}
