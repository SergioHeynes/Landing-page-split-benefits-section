const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


// Styles
function styles() {
    console.log('Starting styles task');
    return gulp.src('./app/assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles/'))
        .pipe(browserSync.stream());
}

exports.styles = styles;


// Watch
function watch() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('./app/assets/styles/**/*.scss', styles);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
}

exports.watch = watch;
