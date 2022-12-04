const parseArgs = () => {
    const withoutPath = process.argv.slice(2);
    const args = withoutPath.reduce((acc, arg, i, arr) => {
        if(arr[i+1] && arg.startsWith('--')) {
            acc.push(`${arg.slice(2)} is ${arr[i+1]}`)
        }
        return acc
    }, []);
    console.log(args.join(', '));
};

parseArgs();