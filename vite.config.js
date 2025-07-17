import { defineConfig } from "vite";
import vituum from "vituum";

export default defineConfig({
  plugins: [
    vituum({
      pages: {
        dir: "src/pages",
        base: "",
      },
    }),
  ],
});
