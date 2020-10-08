const read = require('../read');

module.exports = async (title) => {
  const template = await read('template.tpl');

  return template
    .split(title)
    .pop()
    .split('___')
    .shift()
    .trim()
  ;
}
