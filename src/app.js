const Api = require('./api');
const Database = require('./db/Database');

async function main() {
    const api = new Api();

    await Database.setup();
    api.setup();
    api.start();
}

main().then();
