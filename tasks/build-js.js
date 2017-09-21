'use strict';

const webpackStream = require('webpack-stream');
const webpackConfig = require('./configs/webpack.config');

module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.paths.webpackSrc)
        .pipe(webpackStream(webpackConfig))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(plugins.rename('bundle.js'))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.js}`))
};
