import vituum from "vituum";

export default {
  base: "/wellder/",
  plugins: [
    vituum({
      pages: {
        normalizeBasePath: true,
        base: "/wellder/",
      },
      imports: {
        paths: ["./src/styles//**", "./src/scripts//**"],
      },
    }),
  ],
};
