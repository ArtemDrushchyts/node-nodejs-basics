import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    await fs.rm(pathToFile, (err) => {
        if (err) throw Error('FS operation failed');
    });
};

await remove();