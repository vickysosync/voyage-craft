import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/admin";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Bandhan Tours" },
      { name: "description", content: "Bandhan Tours admin workspace." },
      { property: "og:title", content: "Admin Dashboard — Bandhan Tours" },
      { property: "og:description", content: "Bandhan Tours admin workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});
