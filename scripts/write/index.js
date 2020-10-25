const { promises: { writeFile } } = require('fs');
const { join } = require('path');

module.exports = async (file, string) => (
  await writeFile(
    join(
      __dirname,
      '../../',
      file
    ),
    string
  )
)
