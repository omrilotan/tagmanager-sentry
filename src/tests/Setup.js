mock('injectScript', function(url, onSuccess, onFailure) {
  assertThat(url).isEqualTo('https://browser.sentry-cdn.com/1.2.3/bundle.min.js');
  onSuccess();
});
mock('callInWindow', function(method, data) {
  assertThat(method).isEqualTo('Sentry.init');
  assertThat(data.dsn).isEqualTo('https://SENTRY_KEY@sentry.io/SENTRY_ID');
});
mock('createQueue', function(name) {
  assertThat(name).isEqualTo('dataLayer');
  return function(item) {
    assertThat(item.event).isEqualTo('sentryLoaded');
  };
});
