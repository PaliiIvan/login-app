import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/login-app/",
  server: {
    host: "0.0.0.0",
  },

  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
            },
          ],
        ],
      },
    }),
    svgr(),
  ],
});
