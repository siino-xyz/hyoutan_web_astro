import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import vanillaExtract from "astro-vanilla-extract";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), image(), partytown(), vanillaExtract()],
});
