class BrowserHelpers {
    static isChrome(userAgentHeader) {
        if (/chrome/i.test(userAgentHeader)) {
            return true;
        }

        return false;
    }
}

module.exports = BrowserHelpers;
