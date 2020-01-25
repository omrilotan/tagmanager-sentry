# Sentry template for Google Tag Manager

![](https://user-images.githubusercontent.com/516342/73126661-46a86a80-3fbe-11ea-9a71-9cb3ad2d8aed.png)

1. This template loads the [Sentry SDK](https://docs.sentry.io/error-reporting/quickstart/?platform=browser).
2. Upon success - it calls on init with DSN built from your Key and Application ID.
3. Finally - it fires a custom event, `sentryLoaded` to be picked up by other tags in your system.

For example, my custom tag configured Sentry dimensions
```html
<script>
Sentry.configureScope(function configureSentryScope(scope) {
  scope.setTag('page-type', {{page-type}});
  scope.setTag('pwa-mode', {{pwa-mode}});
});
</script>
```

![](https://user-images.githubusercontent.com/516342/73126539-a736a800-3fbc-11ea-8d84-f7107b4d657a.png)
