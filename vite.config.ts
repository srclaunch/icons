import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name, version } from './package.json';
import path from 'path';
export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.tsx'),
          fileName: format => `index${format === 'es' ? '' : '.' + format}.js`,
          formats: ['es', 'cjs', 'umd'],
          name: 'icons',
        },
        sourcemap: true,
        outDir: './dist',
        rollupOptions: {
          // Externalize deps that shouldn't be bundled
          external: [
            // '@srclaunch/actions',
            // '@srclaunch/exceptions',
            // '@srclaunch/i18n',
            // '@srclaunch/icons',
            // '@srclaunch/logger',
            // '@srclaunch/react-hooks',
            // '@srclaunch/themes','
            // 'aws-sdk',
            // '@srclaunch/icons',
            // '@srclaunch/web-application-state',
            // '@srclaunch/transform',
            // '@srclaunch/types',
            // '@srclaunch/web-application-state',
            // 'amazon-cognito-identity-js',
            // 'color-namer',
            // 'i18n-iso-countries',
            'react',
            // 'react-date-picker',
            'react-dom',
            // 'react-password-strength-bar',
            // 'react-redux',
            // 'react-router',
            // 'react-router-dom',
            'styled-components',
            './src/iconsets/**/*'
          ],
          output: {
            // Global vars to use in UMD build for externalized deps
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'styled-components': 'styled',
            },
          },
        },
      },
      optimizeDeps: {
        exclude: [
          'react',
          'react-dom',
          'styled-components',
          '@vite/client',
          '@vite/env',
        ],
        include: [],
      },
      define: {
        pkgJson: { name, version },
        // window: {},
      },
      esbuild: {
        // jsxFactory: 'h',
        // jsxFragment: 'Fragment',
        // jsxInject: `import React from 'react'`,
      },
      plugins: [
        react({
          babel: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        }),
      ],
    };
  } else if (command === 'serve') {
    return {
      server: {
        port: 3011,
      },
      sourcemap: true,
      rollupOptions: {
        // Externalize deps that shouldn't be bundled
        external: [
          // '@srclaunch/actions',
          // '@srclaunch/exceptions',
          // '@srclaunch/i18n',
          // '@srclaunch/icons',
          // '@srclaunch/logger',
          // '@srclaunch/react-hooks',
          // '@srclaunch/themes','
          // 'aws-sdk',
          // '@srclaunch/transform',
          // '@srclaunch/types',
          // '@srclaunch/web-application-state',
          // 'amazon-cognito-identity-js',
          // 'color-namer',
          // 'i18n-iso-countries',
          // 'react',
          // 'react-date-picker',
          // 'react-dom',
          // 'react-password-strength-bar',
          // 'react-redux',
          // 'react-router',
          // 'react-router-dom',
          // 'styled-components',
        ],
        output: {
          // Global vars to use in UMD build for externalized deps
          globals: {
            //   react: 'React',
            //   'react-dom': 'ReactDOM',
            //   'styled-components': 'styled',
          },
        },
      },
      define: {
        // global: {},
      },
      optimizeDeps: {
        exclude: [],
        include: [],
      },
      plugins: [
        react({
          babel: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        }),
      ],
    };
  }
});
