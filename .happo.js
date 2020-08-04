const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '5ae579f8b3',
    apiSecret: '73337eb667ba59978ccbe2e32',
    targets: {
        'firefox-desktop': new RemoteBrowserTarget('firefox', {
            viewport: '1920x1080',
        }),
        'firefox-mobile': new RemoteBrowserTarget('firefox', {
            viewport: '320x640',
        }),
        chrome: new RemoteBrowserTarget('chrome', {
            viewport: '1920x1080',
        }),
        'internet explorer': new RemoteBrowserTarget('internet explorer', {
            viewport: '1920x1080',
        }),
    },
}


