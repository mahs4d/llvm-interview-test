/* eslint-disable global-require */
const Express = require('express');

class Api {
    constructor() {
        this._app = Express();
    }

    setup() {
        this._app.use(require('./auth/router'));
        this._app.use(require('./pages/router'));
    }

    start() {
        this._app.listen(3000);
    }
}

module.exports = Api;
