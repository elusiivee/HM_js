const { src, dest, task } = require('gulp');
const minify = require('gulp-minify');

task('minify-js', function () {
    return src('\example.js')
        .pipe(minify())
        .pipe(dest('output/'));
});
