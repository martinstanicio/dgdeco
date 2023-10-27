import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://martinstanicio.github.io",
  base: "/dgdeco",
  integrations: [tailwind(), sitemap(), prefetch()],
});
