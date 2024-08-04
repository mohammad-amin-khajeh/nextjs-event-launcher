import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        react: "#5ed3f4",
        tailwind: "#18b0b8",
        neovim: "#78b560",
        arch: "#1793d1",
        suckless: "#1177aa",
      },
    },
  },
  plugins: [],
};
export default config;
