class AuthControllers {
    static showLoginPage(req, res) {
        res.render('login');
    }

    static submitLoginPage(req, res, next) {}
}

module.exports = AuthControllers;
