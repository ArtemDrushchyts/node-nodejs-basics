import { Worker } from 'worker_threads';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const pathToWorker = path.join(dirname(__filename), 'worker.js');

const performCalculations = async () => {
    const cp = cpus();

    const result = await Promise.allSettled(cp.map((core, i) => {
        return (new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { workerData: 10 + i });
            worker.on('message', (msg) => {
                resolve({ status: 'resolved', data: msg });
            })
            worker.on('error', (msg) => {
                reject({ status: 'error', data: null });
            })
        }))
    }));

    result.map(item => {
        console.log(item.status === 'fulfilled' ? item.value : item.reason );
    });
};

await performCalculations();