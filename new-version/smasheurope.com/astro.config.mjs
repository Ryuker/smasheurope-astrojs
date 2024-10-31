// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), 
    icon({
      iconDir: "src/assets/icons",
      include: {
        // mdi: ["*"], // (Default) Loads entire Material Design Icon set
        // mdi: ["account"], // Loads only Material Design Icon's "account" SVG
      }
    })
  ],
  output: 'server'
});