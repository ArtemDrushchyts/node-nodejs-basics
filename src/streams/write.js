import { createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writeStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writeStream);
};

await write();