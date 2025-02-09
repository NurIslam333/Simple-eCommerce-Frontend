/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "300px",
        // => @media (min-width: 640px) { ... }

        tab: "667px",
        // => @media (min-width: 768px) { ... }

        laptop: "1200px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1600px",
        // => @media (min-width: 1600px) { ... }
      },
      container: {
        center: true,
      },
      colors: {
        "green-color": "#03484D",
        "dark-green-color": "#0E3B3E",

        "black-color": "#000000",

        "cyan-color": "#00CAD7",
        "dark-cyan-color": "#034E53",

        "gray-color": "#697475",

        "border-color": "#C7C7C7",
      },
    },
  },
  plugins: [],
};
