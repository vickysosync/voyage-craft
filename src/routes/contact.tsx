import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Bandhan Tours" },
      { name: "description", content: "Visit, call or write to Bandhan Tours in Wagle Industrial Estate, Thane West." },
      { property: "og:title", content: "Contact Us — Bandhan Tours" },
      { property: "og:description", content: "Visit, call or write to Bandhan Tours in Wagle Industrial Estate, Thane West." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><ContactPage /></SiteLayout>;
}
