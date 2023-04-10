import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    prefetch(),
    sitemap(),
    vue(),
    partytown(),
    robotsTxt(),
  ],
});
