'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.sass, gulp.series('lint:scss', 'build:scss'));
  gulp.watch(config.paths.webpackSrc, gulp.series('build:js'));
  gulp.watch(config.paths.html, gulp.series('copy'));
};
