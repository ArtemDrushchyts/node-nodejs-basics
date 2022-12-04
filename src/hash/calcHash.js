import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const content = await readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), { encoding: 'utf-8' });
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(`Hex hash: ${hash}`);
    } catch (err) {
        throw err
    }
};

await calculateHash();