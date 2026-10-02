import { createFileRoute } from "@tanstack/react-router";
import { AdminLogin } from "@/components/admin";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login — Bandhan Tours" },
      { name: "description", content: "Bandhan Tours admin workspace." },
      { property: "og:title", content: "Admin Login — Bandhan Tours" },
      { property: "og:description", content: "Bandhan Tours admin workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLogin,
});
