const { request } = require('https');

module.exports = (options) => new Promise(
  (resolve, reject) => {
    const parts = [];

    request(
      options,
      response => response.on(
        'data',
        part => parts.push(part)
      ).on(
        'end',
        () => resolve(
          JSON.parse(parts.join(''))
        )
      )
    ).on(
      'error',
      error => reject(error)
    ).end();
  }
);
