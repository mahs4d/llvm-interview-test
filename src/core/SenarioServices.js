const BrowserHelper = require('../helpers/BrowserHelpers');
const BrowserHelpers = require('../helpers/BrowserHelpers');

class SenarioServices {
    static getRequestSenarioId(user, userAgentHeader) {
        if (user) {
            return user.senarioId;
        }

        return BrowserHelpers.isChrome(userAgentHeader) ? 2 : 1;
    }

    static getPage1ColorBySenarioId(senarioId) {
        return senarioId === 1 ? 'blue' : 'green';
    }

    static getPage2ColorBySenarioId(senarioId) {
        return senarioId === 1 ? 'yellow' : 'black';
    }

    static getPage3ColorBySenarioId(senarioId) {
        return senarioId === 1 ? 'red' : 'purple';
    }
}

module.exports = SenarioServices;
