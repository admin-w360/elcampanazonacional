import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";
import * as fs from "fs";
import {homedir} from 'os';
import {resolve} from 'path';

const host = 'elcampanazonacional.test';

export default defineConfig({
    server: {
        hmr: {host},
        host,
        cors: true,
        https: https(host),
    },
    plugins: [
        react(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/css/style.css',
                'resources/js/index.tsx'
            ],
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});


function https(host) {
    let keyPath = resolve(homedir(), "C:/laragon/etc/ssl/laragon.key");
    let certificatePath = resolve(homedir(), "C:/laragon/etc/ssl/laragon.crt");

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certificatePath),
    }
}
