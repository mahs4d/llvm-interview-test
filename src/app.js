const Api = require('./api');

function main() {
    const api = new Api();

    api.setup();
    api.start();
}

main();
