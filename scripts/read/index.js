const { promises: { readFile } } = require('fs');
const { join } = require('path');

module.exports = async file => (
  await readFile(
    join(
      __dirname,
      '../../',
      file
    )
  )
).toString();
