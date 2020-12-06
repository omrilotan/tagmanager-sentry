#!/usr/bin/env node

const req = require('../request');
const tpl = require('../template');
const replace = require('../replace');

start();


async function start() {
  const { tag_name } = await req({
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/getsentry/sentry-javascript/releases/latest',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'omrilotan/tagmanager-sentry'
    }
  });

  const params = JSON.parse(await tpl('___TEMPLATE_PARAMETERS___'));


  const { defaultValue } = params.find(({ name }) => name === 'version');

  if (defaultValue !== tag_name) {
    console.log(`issue_body="Default value is ${defaultValue} while latest version is ${tag_name}. [See docs](https://docs.sentry.io/platforms/javascript/install/cdn/)."`);

    await replace('template.tpl', defaultValue, tag_name);
  } else {
    process.exit(1);
  }
}
