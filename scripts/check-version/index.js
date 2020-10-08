#!/usr/bin/env node

const req = require('../request');
const tpl = require('../template');

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
    console.log(`issue_body="Default value is ${defaultValue} while latest version is ${tag_name}"`);;
  } else {
    console.log('Do not open issue');
    process.exit(1);
  }
}
