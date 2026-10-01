import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Défi Kinésique — Jeu de classe hors-ligne" },
      { name: "description", content: "Dix gestes animés à décrypter dans un jeu de classe sur la communication non verbale, jouable hors-ligne." },
      { property: "og:title", content: "Défi Kinésique — Jeu de classe hors-ligne" },
      { property: "og:description", content: "Dix gestes animés à décrypter dans un jeu de classe sur la communication non verbale, jouable hors-ligne." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Défi Kinésique — jeu de classe"
      src="/defi-kinesique.html"
      className="block h-dvh w-full border-0"
      allow="autoplay"
    />
  );
}
