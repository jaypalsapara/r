import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, lazyPlugins } from 'vite-plus';

// https://vite.dev/config/
export default defineConfig({
    plugins: lazyPlugins(() => [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        tailwindcss(),
    ]),
    fmt: {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        ignorePatterns: ['.github/**', 'public/**'],
        sortTailwindcss: {
            functions: ['clsx', 'cn', 'cva'],
            stylesheet: 'src/index.css',
        },
    },
    lint: {
        plugins: ['react', 'typescript', 'oxc'],
        rules: {
            'react/rules-of-hooks': 'error',
            // 'react/only-export-components': [
            //     'warn',
            //     {
            //         allowConstantExport: true,
            //     },
            // ],
            'vite-plus/prefer-vite-plus-imports': 'error',
            'no-unused-vars': [
                'error',
                {
                    fix: {
                        imports: 'safe-fix',
                        variables: 'off',
                    },
                },
            ],
        },
        ignorePatterns: ['node_modules/**', 'public/**'],
        options: {
            typeAware: true,
            typeCheck: true,
        },
        jsPlugins: [
            {
                name: 'vite-plus',
                specifier: 'vite-plus/oxlint-plugin',
            },
        ],
    },
});
