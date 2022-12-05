import { fork } from 'child_process'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const pathToFile = path.join(dirname(__filename), 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(pathToFile, args);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);