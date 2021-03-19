const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
   apiKey: process.env.HAPPO_API_KEY,
   apiSecret: process.env.HAPPO_API_SECRET,
   project: 'StretchdSpace',
   targets: {
      'safari-mobile': new RemoteBrowserTarget('ios-safari', {
         viewport: '375x667',
         maxHeight: 10000,
      }),
      'chrome-mobile': new RemoteBrowserTarget('chrome', {
         viewport: '480x800',
         maxHeight: 10000,
      }),
      'chrome-desktop': new RemoteBrowserTarget('chrome', {
         viewport: '1440x900',
         maxHeight: 10000,
      }),
      'ie11-desktop': new RemoteBrowserTarget('internet explorer', {
         viewport: '1200x675',
         maxHeight: 10000,
         scrollStitch: true,
      }),
      'edge-desktop': new RemoteBrowserTarget('edge', {
         viewport: '1200x675',
         maxHeight: 10000,
      }),
      'safari-desktop': new RemoteBrowserTarget('safari', {
         viewport: '1200x750',
         maxHeight: 10000,
         scrollStitch: true,
      }),
   },
}
