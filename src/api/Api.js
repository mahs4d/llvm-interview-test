/* eslint-disable global-require */
const Path = require('path');
const Express = require('express');

class Api {
    constructor() {
        this._app = Express();
    }

    setup() {
        this._app.set('views', Path.join(__dirname, '../views'));
        this._app.set('view engine', 'ejs');

        this._app.use(require('./auth/router'));
        this._app.use(require('./pages/router'));
    }

    start() {
        this._app.listen(3000);
        console.log('started listening at port 3000');
    }
}

module.exports = Api;
