import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*.svelte',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    forms,
    containerQueries
  ]
};

export default config;