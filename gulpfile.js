var gulp = require("gulp");
var clean = require('gulp-clean');
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var server = require('gulp-webserver');
var ejs = require('gulp-ejs');

var path = {
  ejs: [
  'src/ejs/index.ejs',
  'src/ejs/task1/index.ejs'
  ],
  css: [
  'src/css/common.css',
  'src/css/task1.css'
  ],
  dist: 'dist',
  lib: 'src/lib/*',
  all: '*',
  mockUrl: [
  'task1/'
  ],
  cssCmnMockLink: 'css/common.css',
  cssCmnTaskLink: '../css/common.css',
  libMockLink: 'lib'
};

var workTime = [
  '2.5',
  '0',
  '0',
  '0',
  '0'
];

gulp.task('ejs', function () {
  return gulp.src(path.ejs, {base: 'src/ejs'})
  .pipe(ejs({
    data: {
      mockUrl: path.mockUrl,
      cssCmnMockLink: path.cssCmnMockLink,
      cssCmnTaskLink: path.cssCmnTaskLink,
      libMockLink: path.libMockLink,
      workTime: workTime
    }
  }, {ext: '.html'}))
  .pipe(gulp.dest(path.dist));
  console.log('ejs完了');
});

gulp.task('css', function () {
  return gulp.src(path.css, {base: 'src/css'})
  .pipe(gulp.dest(path.dist + '/css'));
  console.log('css完了');
});

gulp.task('copy', function () {
  gulp.src(path.lib).pipe(gulp.dest(path.dist + '/lib'));
});

gulp.task('cleanDist', function () {
  gulp.src(path.dist + '/*').pipe(clean());
});

function watchSrc () {
  gulp.watch(['src/**/*.ejs'], ['ejs']);
  gulp.watch(['src/**/*.css'], ['css']);
};

gulp.task('serve', function () {
  watchSrc();
  gulp.src(path.dist)
  .pipe(server({
    host: '0.0.0.0',
    port: 8008,
    livereload: true,
    open: true
  }));
  console.log('listening ...');
});

gulp.task('default', function () {
  console.log('hello gulp');
});
