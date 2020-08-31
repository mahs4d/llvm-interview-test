class AuthMiddlewares {
    static authenticate(req, res, next) {
        if (req.session.user) {
            req.isAuthenticated = true;
            req.user = req.session.user;
        } else {
            req.isAuthenticated = false;
            req.user = null;
        }

        next();
    }

    static requireLogin(req, res, next) {
        if (req.isAuthenticated) {
            next();
        } else {
            res.redirect('/login');
        }
    }
}

module.exports = AuthMiddlewares;
