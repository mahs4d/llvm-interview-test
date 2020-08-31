const SenarioServices = require('../../core/SenarioServices');
const AuthServices = require('../../core/AuthServices');

class AuthControllers {
    static showLoginPage(req, res) {
        res.render('login');
    }

    static async submitLoginPage(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            res.render('login', { error: 'username or password not provided' });
            return;
        }

        const senarioId = SenarioServices.getRequestSenarioId(null, req.headers['user-agent']);
        const user = await AuthServices.login(username, password, senarioId);

        if (!user) {
            res.render('login', { error: 'wrong password' });
            return;
        }

        req.session.user = {
            username: user.username,
            senarioId: user.senarioId,
        };

        res.redirect('/page1');
    }

    static async logout(req, res) {
        req.session.user = null;
        res.redirect('page1');
    }
}

module.exports = AuthControllers;
