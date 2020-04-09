# Sentry template for Google Tag Manager

Add sentry script to page.
After Sentry init, the custom event "sentryLoaded" will be fired.

![](https://user-images.githubusercontent.com/516342/77833539-3728d780-714f-11ea-900e-5e25b0a7a8a9.png)


Find your project ID and public key key [in you settings page](https://sentry.io/settings):
```
─ projects
  └─ <PROJECT_NAME>
     └─ Client Keys (DSN)
        └─ Configure (button)
           ├─ Public Key (scroll down)
           └─ Project ID
```

1. This template loads the [Sentry SDK](https://docs.sentry.io/error-reporting/quickstart/?platform=browser).
2. Upon success - it calls on init with DSN built from your Key and Application ID.
3. Finally - it fires a custom event, `sentryLoaded` to be picked up by other tags in your system.

An example custom tag configuring Sentry dimensions
```html
<script>
Sentry.configureScope(function configureSentryScope(scope) {
  scope.setTag('page-type', {{page-type}});
  scope.setTag('pwa-mode', {{pwa-mode}});
});
</script>
```

![](https://user-images.githubusercontent.com/516342/73126539-a736a800-3fbc-11ea-8d84-f7107b4d657a.png)

Browse source code and tests in [src](./src) directory
