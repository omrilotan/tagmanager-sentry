#!/usr/bin/env node

const { promises: { readFile } } = require('fs');
const { join } = require('path');
const req = require('./req');

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

  const template = (
    await readFile(
      join(
        __dirname,
        '../../',
        'template.tpl'
      )
    )
  ).toString();
  const params = JSON.parse(
    template
      .split('___TEMPLATE_PARAMETERS___')
      .pop()
      .split('___')
      .shift()
      .trim()
  );
  const { defaultValue } = params.find(({ name }) => name === 'version');

  if (defaultValue !== tag_name) {
    console.log(`issue_body="Default value is ${defaultValue} while latest version is ${tag_name}"`);;
  } else {
    console.log('We\'re good here');
    process.exit(1);
  }
}
