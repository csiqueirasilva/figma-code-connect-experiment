import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from "@mdx-js/rollup";
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/figma-code-connect-experiment/' : '/',
  plugins: [react(), tailwindcss(), mdx()],
  resolve: {
    alias: {
      '@': '/src',
      'compositions': path.resolve(__dirname, 'node_modules/sds/src/ui/compositions'),
      'hooks': path.resolve(__dirname, 'node_modules/sds/src/ui/hooks'),
      'icons': path.resolve(__dirname, 'node_modules/sds/src/ui/icons'),
      'images': path.resolve(__dirname, 'node_modules/sds/src/ui/images'),
      'layout': path.resolve(__dirname, 'node_modules/sds/src/ui/layout'),
      'primitives': path.resolve(__dirname, 'node_modules/sds/src/ui/primitives'),
      'providers': path.resolve(__dirname, 'node_modules/sds/src/ui/providers'),
      'utils': path.resolve(__dirname, 'node_modules/sds/src/ui/utils')
    },
  },
}));