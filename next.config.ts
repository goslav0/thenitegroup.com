import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Kluczowe dla GitHub Pages (generuje folder /out)
  images: {
    unoptimized: true,   // GitHub nie obsługuje serwerowej optymalizacji obrazów
  },
  // Jeśli Twoja strona jest w podfolderze (np. nick.github.io/event-site/),
  // to odkomentuj linię poniżej i wpisz nazwę repozytorium:
  // basePath: '/nazwa-twojego-repozytorium',
};

export default nextConfig;