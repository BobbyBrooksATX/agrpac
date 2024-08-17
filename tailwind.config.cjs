import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        red: '#a5241b',
        redAGR: '#a5241b',
        blueAGR: '#053d7a',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, Poppins)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, Vollkorn)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, Vollkorn)', ...defaultTheme.fontFamily.serif], // Ensuring Vollkorn is used for headings
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
