import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const pathToReadFile = path.join(dirname(__filename), 'files', 'archive.gz');
const pathToWriteFile = path.join(dirname(__filename), 'files', 'fileToCompress.txt');

const decompress = async () => {
    const read = createReadStream(pathToReadFile);
    const write = createWriteStream(pathToWriteFile);
    const unZip = createUnzip();

    pipeline(read, unZip, write, (err) => {
        if(err) {
            console.error('Oops, something went wrong');
        } else {
            console.log('File is decompressed');
        }
    });
};

await decompress();