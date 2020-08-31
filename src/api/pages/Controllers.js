const SenarioServices = require('../../core/SenarioServices');

class PagesControllers {
    static showPage1(req, res) {
        const senarioId = SenarioServices.getRequestSenarioId(req.user, req.headers['user-agent']);
        const pageColor = SenarioServices.getPage1ColorBySenarioId(senarioId);
        res.render('colored-page', { pageColor, user: req.user });
    }

    static showPage2(req, res) {
        const senarioId = SenarioServices.getRequestSenarioId(req.user, req.headers['user-agent']);
        const pageColor = SenarioServices.getPage2ColorBySenarioId(senarioId);
        res.render('colored-page', { pageColor, user: req.user });
    }

    static showPage3(req, res) {
        const senarioId = SenarioServices.getRequestSenarioId(req.user, req.headers['user-agent']);
        const pageColor = SenarioServices.getPage3ColorBySenarioId(senarioId);
        res.render('colored-page', { pageColor, user: req.user });
    }
}

module.exports = PagesControllers;
