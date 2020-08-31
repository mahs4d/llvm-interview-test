const Express = require('express');
const AuthControllers = require('./Controllers');

const router = Express.Router();

router.get('/login', AuthControllers.showLoginPage);
router.post('/login', AuthControllers.submitLoginPage);

module.exports = router;
