import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFiles = path.join(__dirname, 'files');

const list = async () => {
    await fs.readdir(pathToFiles, (err, files) => {
        if (err) throw Error('FS operation failed')
        console.table(files)
    });
};

await list();