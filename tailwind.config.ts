import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1e3a5f",       // Bright blue
      secondary: "#ddf3ff",     // Lighter blue
      white: "#fff",            // Stays white
      darkGray: "#1e3a5f",      // Dark blue-gray
      
    },
  },
  plugins: [],
};
export default config;
