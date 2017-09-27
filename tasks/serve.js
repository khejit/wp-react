'use strict';

const bs = require('browser-sync');

module.exports = (gulp, plugins, config) => () => {
  bs.init({ server: './public', open: false });
  bs.watch('./public/**/*.*').on('change', bs.reload);
};
