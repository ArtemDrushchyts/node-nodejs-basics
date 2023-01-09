import fs from 'fs/promises';
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const create = async () => {
    const _dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(_dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' }, (err) => {
            if (err) throw new Error
        })
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.error(Error(`FS operation failed`));
        }
    }
}

await create();