import type { Config } from "tailwindcss";
import tailwindClipPath from "tailwind-clip-path";
import vidStack from "@vidstack/react/tailwind.cjs";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        "bg-shape": "polygon(0% 0%, 60% 0%, 45% 75%, 100% 100%, 0% 100%)",
        "bg-shape-fliped":
          "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 55% 75%)",
        "left-info": "polygon(0% 20%, 100% 20%, 100% 100%, 0% 85%)",
        "right-info": "polygon(0% 20%, 100% 20%, 100% 85%, 0% 100%)",
        "center-info": "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
        "middle-info-sm": "polygon(4% 0%, 96% 0%, 94% 100%, 6% 100%)",
        "bottom-info-sm": "polygon(7% 0%, 93% 0%, 90% 100%, 9% 100%)",
      },
      colors: {
        "black-light": "#1E1E1E",
        "black-lighter": "#3D3D3D",
        "custom-orange": "#FF3D00",
      },
      boxShadow: {
        inner: "inset -1px 1px 10px var(--tw-shadow)",
      },
      screens: {
        xs: "465px",
      },
      backgroundImage: {
        "about-image":
          "linear-gradient(to right, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.2)), url('assets/images/about.png')",
      },
    },
  },
  plugins: [tailwindClipPath, vidStack, tailwindScrollbar],
};
export default config;
