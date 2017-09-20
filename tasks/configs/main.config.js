module.exports = {
    tasks: './tasks',
    paths: {
        sass: './sass/**/*.scss',
        sassMain: './sass/main.scss',
        scsslint: './scsslint.yml',
        entry: './js/index.jsx',
        js: './js/**/*.jsx',
        webpackSrc: './js/**/*.*',
        html: './*.html',
        dist: './public'
    },
    output: {
        js: 'js',
        css: 'css',
        images: 'images'
    }
};
