var gulp = require("gulp");
var clean = require('gulp-clean');
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var server = require('gulp-webserver');
var ejs = require('gulp-ejs');
var runSequece = require('run-sequence');

var path = {
  ejs: 'src/ejs/**/index.ejs',
  css: 'src/css/*.css',
  mock: 'mock',
  dist: 'dist',
  lib: 'src/lib/*',
  img: 'src/img/*',
  all: '*',
  mockUrl: [
  'task1',
  'task2',
  'task3',
  'task4',
  'task5'
  ],
  cssCmnMockLink: 'css/common.css',
  cssCmnTaskLink: '../css/common.css',
  libMockLink: 'lib'
};

var workTime = [
  '2.5',
  '5.5',
  '3',
  '0',
  '0'
];

var isDist = false;

gulp.task('dist', function () {
  return isDist = true;
});

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
  .pipe(gulp.dest((isDist) ? path.dist : path.mock));
  console.log('ejs完了');
});

gulp.task('css', function () {
  return gulp.src(path.css, {base: 'src/css'})
  .pipe(gulp.dest((isDist) ? path.dist + '/css' : path.mock + '/css'));
  console.log('css完了');
});

gulp.task('copy', function () {
  return (function () {
    gulp.src(path.lib)
    .pipe(gulp.dest((isDist) ? path.dist + '/lib' : path.mock + '/lib'));
    gulp.src(path.img)
    .pipe(gulp.dest((isDist) ? path.dist + '/img' : path.mock + '/img'));
  })();
});

gulp.task('clean', function () {
  return gulp.src((isDist) ? path.dist + '/*' : path.mock + '/*').pipe(clean());
});

function watchSrc () {
  gulp.watch(['src/**/*.ejs'], ['ejs']);
  gulp.watch(['src/**/*.css'], ['css']);
};

gulp.task('serve', function () {
  watchSrc();
  gulp.src((isDist) ? path.dist : path.mock)
  .pipe(server({
    host: '0.0.0.0',
    port: 8008,
    livereload: true,
    open: true
  }));
  console.log('listening ...');
});

gulp.task('build', function () {
  runSequece('dist', 'clean', ['ejs', 'css', 'copy']);
  console.log('building ...');
});

gulp.task('check', function () {
  runSequece('dist', 'serve');
});

gulp.task('default', function () {
  console.log('hello gulp');
});
