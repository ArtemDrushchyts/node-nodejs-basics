import { EOL } from 'os';
import { Transform, pipeline } from 'stream';

const transform = async () => {
    const transformText = new Transform({
        transform(chunk, enc, cb) {
            const inputText = chunk.toString().trim();
            const revert = inputText.split('').reverse().join('');
            cb(null, revert + EOL)
        }
    });
    pipeline(process.stdin, transformText, process.stdout, (err) => {
        console.log(err)
    });
}

await transform();