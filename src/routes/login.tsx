import { createFileRoute } from "@tanstack/react-router";
import { CustomerLogin } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Customer Login — Bandhan Tours" },
      { name: "description", content: "Sign in to your Bandhan Tours traveller account." },
      { property: "og:title", content: "Customer Login — Bandhan Tours" },
      { property: "og:description", content: "Sign in to your Bandhan Tours traveller account." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><CustomerLogin /></SiteLayout>;
}
