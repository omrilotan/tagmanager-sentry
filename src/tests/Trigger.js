const mockData = {
  appID: 'SENTRY_ID',
  key: 'SENTRY_KEY',
  version: '1.2.3'
};

runCode(mockData);

assertApi('injectScript').wasCalled();
