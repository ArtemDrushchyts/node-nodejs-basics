import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readStream = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    readStream.pipe(process.stdout);
};

await read();