# Défi Kinésique

Jeu de classe sur la communication non verbale (kinésique) — `public/defi-kinesique.html`.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Note — fichier jeu volumineux

Le jeu `public/defi-kinesique.html` (~2 Mo, vidéos intégrées) est stocké découpé dans
`public/.chunks/` car l'API GitHub limite la taille par requête. Le script
`scripts/reassemble.sh` le reconstitue automatiquement avant le build Vercel
(voir `vercel.json`). Pour usage local : `bash scripts/reassemble.sh`.
(bun.lock omis — régénérable via `bun install`.)
