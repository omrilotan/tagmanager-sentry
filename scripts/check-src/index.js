#!/usr/bin/env node

const { strictEqual } = require('assert');
const yaml = require('yaml');
const tpl = require('../template');
const read = require('../read');

const compare = (a, b) => strictEqual(a.trim(), b.trim());

start().catch(error => {
  console.log(error.message);
  process.exit(1);
});

async function start() {
  const code = await tpl('___SANDBOXED_JS_FOR_WEB_TEMPLATE___');
  const tests = await tpl('___TESTS___');
  const setupSrc = await read('src/tests/Setup.js');
  const triggerSrc = await read('src/tests/Trigger.js');
  const codeSrc = await read('src/code/index.js');

  const {
    scenarios,
    setup,
  } = yaml.parse(tests);

  compare(code, codeSrc);
  compare(scenarios[0].code, triggerSrc);
  compare(setup, setupSrc);
}
