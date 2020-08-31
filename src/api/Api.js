/* eslint-disable global-require */
const Path = require('path');
const Express = require('express');
const ExpressSession = require('express-session');
const BodyParser = require('body-parser');
const AuthMiddlewares = require('./auth/Middlewares');

class Api {
    constructor() {
        this._app = Express();
    }

    setup() {
        this._app.set('views', Path.join(__dirname, '../views'));
        this._app.set('view engine', 'ejs');

        this._app.use(BodyParser.urlencoded({ extended: true }));
        this._app.use(BodyParser.json());
        this._app.use(ExpressSession({ secret: 'abcdefgsome secret is here :D' }));

        this._app.use(AuthMiddlewares.authenticate);

        this._app.get('/', (req, res) => {
            res.redirect('/page1');
        });
        this._app.use(require('./auth/router'));
        this._app.use(require('./pages/router'));
    }

    start() {
        this._app.listen(3000);
        console.log('started listening at port 3000');
    }
}

module.exports = Api;
