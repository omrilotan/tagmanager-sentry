const callInWindow = require('callInWindow');
const createQueue = require('createQueue');
const injectScript = require('injectScript');

const dataLayerPush = createQueue('dataLayer');

function sentryLoaded() {
  callInWindow(
    'Sentry.init',
    {
      dsn: 'https://' + data.key + '@sentry.io/' + data.appID
    }
  );
  dataLayerPush({ event: 'sentryLoaded' });
  data.gtmOnSuccess();
}

injectScript(
  'https://browser.sentry-cdn.com/' + data.version + '/bundle.min.js',
  sentryLoaded,
  data.gtmOnFailure,
  'sentry'
);
