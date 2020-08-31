const Express = require('express');
const AuthMiddlewares = require('../auth/Middlewares');
const PagesControllers = require('./Controllers');

const router = Express.Router();

router.get('/page1', PagesControllers.showPage1);
router.get('/page2', AuthMiddlewares.requireAuthentication, PagesControllers.showPage2);
router.get('/page3', AuthMiddlewares.requireAuthentication, PagesControllers.showPage3);

module.exports = router;
