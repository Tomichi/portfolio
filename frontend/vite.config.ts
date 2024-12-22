import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: 3000,
        strictPort: true, // Throw if port is already in use
        host: true // Listen on all addresses
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    build: {
        // Use esbuild minification (faster than terser)
        minify: 'esbuild',
        cssMinify: true,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['svelte', '@sveltejs/kit'],
            },
            // Optimize chunk naming and organization
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/[name]-[hash].js',
            assetFileNames: ({name}) => {
              if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                return 'images/[name]-[hash][extname]';
              }
              if (/\.css$/.test(name ?? '')) {
                return 'css/[name]-[hash][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
        // Enable source map only in development
        sourcemap: process.env.NODE_ENV === 'development',
        // Report on chunking
        chunkSizeWarningLimit: 1000,
        reportCompressedSize: true,
    },
    // Optimize dependency pre-bundling
    optimizeDeps: {
        include: ['svelte', '@sveltejs/kit'],
    },
});