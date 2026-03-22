import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg-2)',
        bg3: 'var(--bg-3)',
        purple: 'var(--purple)',
        'purple-lt': 'var(--purple-lt)',
        mauve: 'var(--mauve)',
        'dark-pur': 'var(--dark-pur)',
        muted: 'var(--muted)',
        slate: 'var(--slate)',
        'mid-pur': 'var(--mid-pur)',
        border: 'var(--border)',
        card: 'var(--card)',
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-mauve': 'linear-gradient(135deg, var(--purple-lt), var(--mauve))',
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 18s linear infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
      },
      keyframes: {
        'marquee-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
