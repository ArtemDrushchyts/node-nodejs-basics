import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'files-copy')
const pathToFiles = path.join(__dirname, 'files');

const copy = async () => {

    await fs.mkdir(dist, (err) => {
        if (err) throw Error('FS operation failed')
    })

    await fs.readdir(pathToFiles, (err, files) => {
        if (err) throw Error('FS operation failed')
        files.forEach((file) => {
            fs.copyFile(path.join(pathToFiles, file), path.join(dist, file), () => {})
        })
    })
};

copy();