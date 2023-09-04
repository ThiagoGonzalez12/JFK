import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const PATH_ROUTES = path.dirname(__filename);

const removeExtension = (filename) =>{
    return filename.split('.').shift()
}

(async () => {
    const files = await fs.readdir(PATH_ROUTES);
    for (const file of files) {
        const name = removeExtension(file);
        if (name !== 'index') {
            const dynamicModule = await import(`./${file}`);
            router.use(`/${name}`, dynamicModule.default);
        }
    }
})();

export default router;
