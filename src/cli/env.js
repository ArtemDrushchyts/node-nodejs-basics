const parseEnv = () => {
    const rssEnv = []
    for(let env of Object.entries(process.env)) {
        if(env[0].includes('RSS_')) {
            rssEnv.push(`${env[0]}=${env[1]}`)
        }
    }
    console.log(rssEnv.join('; '));

};

parseEnv();