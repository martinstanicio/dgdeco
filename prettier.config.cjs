/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro-organize-imports",
  ],
  astroOrganizeImportsMode: "SortAndCombine",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
