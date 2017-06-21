/*
 * Name: Atlas
 * Author: Zengenti Ltd
 * Author URI: http://zengenti.com
 * Description: A modern front-end framework
 * Version: 0.0.1
 */

// Paths
var pathSass     = 'src/scss/';
var pathJs       = 'src/js/';
var pathImg      = 'src/images/';

// General
var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var rename       = require('gulp-rename');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var inject       = require('gulp-inject');
var sourcemaps   = require('gulp-sourcemaps');

// Sass
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JavaScript
var eslint       = require('gulp-eslint');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');

// SVG
var svgSprite    = require('gulp-svg-sprite');

/*
 * Scripts object
 */
var scripts = [
  pathJs + 'app.js'
];

/*
 * Sass
 */
gulp.task('sass', function() {
  return gulp.src(pathSass + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', notify.onError('Sass lint failed.\n<%= error.message %>')))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

/*
 * JavaScript linting (excludes any third party scripts in libs)
 */
gulp.task('js-lint', function() {
  return gulp.src([pathJs + '**/*', '!' + pathJs + 'libs/**/*'])
    .pipe(eslint())
    .pipe(plumber())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()
    .on('error', notify.onError('JS lint failed.\n<%= error.message %>')));
});

/*
 * JavaScript concat and minify
 */
gulp.task('js', ['js-lint'], function() {
  return gulp.src(scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

/*
 * JavaScript watch
 * Ensures the 'js' task is complete before reloading browsers
 */
gulp.task('js-watch', ['js'], browserSync.reload);

/*
 * SVG sprite
 */
gulp.task('svg', function() {
  var svgs = gulp
  .src(pathImg + 'icons/**/*.svg')
  .pipe(rename({
    prefix: 'icon-'
  }))
  .pipe(svgSprite({
    mode: {
      symbol: {
        dest: '',
        sprite: 'icons/icons.svg',
        bust: false,
        inline: true
      }
    }
  }).on('error', notify.onError('SVG lint failed.\n<%= error.message %>')));

  // Inlining result into HTML body
  function fileContents (filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src('public/**/*.html')
    .pipe(inject(svgs, {
      transform: fileContents
    }))
    .pipe(gulp.dest('public'));
});

/*
 * Serve
 */
gulp.task('serve', ['sass', 'js', 'svg'], function() {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    notify: false
  });

  gulp.watch(pathSass + '**/*.scss', ['sass']);
  gulp.watch(pathJs + '**/*', ['js-watch']);
  gulp.watch('public/**/*.html', browserSync.reload);
});

/*
 * Tasks
 */
gulp.task('default', ['sass', 'js', 'svg', 'serve'], browserSync.reload);
