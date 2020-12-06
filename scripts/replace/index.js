const read = require('../read');
const write = require('../write');

module.exports = async function(file, source, replacement) {
  const original = await read(file);
  const content = original.replace(source, replacement);
  await write(file, content);
}
