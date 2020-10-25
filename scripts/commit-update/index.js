#!/usr/bin/env node

const exec = require('async-execute');
const yaml = require('yaml');
const read = require('../read');
const write = require('../write');

const changeNotes = 'Bump default SDK version';

start();

async function start() {
  await exec('git add .');
  await exec(`git commit -m "${changeNotes}"`);
  const sha = await exec('git log --pretty=format:"%H" -1');

  const metadataSrc = await read('metadata.yaml');
  const metadata = yaml.parse(metadataSrc);

  metadata.versions.unshift({ sha, changeNotes });
  await write('metadata.yaml', yaml.stringify(metadata))

  await exec('git add .');
  await exec(`git commit -m "Update metadata: ${changeNotes}"`);
}
