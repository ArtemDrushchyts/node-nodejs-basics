import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    await fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if(err) throw Error('FS operation failed')
        console.log(data);
    })
};

await read();