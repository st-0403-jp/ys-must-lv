var gulp = require("gulp");
var clean = require('gulp-clean');
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var server = require('gulp-webserver');
var ejs = require('gulp-ejs');
var runSequece = require('run-sequence');

var exe = 'jQuery演習';

var path = {
  ejs: 'src/ejs/**/index.ejs',
  css: 'src/css/*.css',
  js: 'src/js/*.js',
  mock: 'mock',
  dist: 'dist',
  lib: 'src/lib/*',
  img: 'src/img/*',
  upload: 'src/upload/*',
  all: '*',
  tasks: [
    '01-01',
    '01-02',
    '01-03',
    '02-01',
    '03-01',
    '04-01',
    '05-01',
    '05-02',
    '05-03',
    '06-01',
    '07-01',
    '07-02',
    '07-03',
    '08-01',
    '09-01',
    '09-02',
    '09-03',
    '10-01',
    '10-02',
    '11-01',
    '12-01',
    '13-01',
    '13-02',
    '13-03'
  ],
  cssCmnLink: 'common.css',
  cssTaskLink: 'task.css',
  libLink: [
    'jquery.min.js'
  ]
};

var isDist = false;

gulp.task('dist', function () {
  return isDist = true;
});

gulp.task('ejs', function () {
  return gulp.src(path.ejs, {base: 'src/ejs'})
  .pipe(ejs({
    data: {
      exe: exe,
      tasks: path.tasks,
      cssCmnLink: path.cssCmnLink,
      cssTaskLink: path.cssTaskLink,
      libLink: path.libLink
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

gulp.task('js', function () {
  return gulp.src(path.js, {base: 'src/js'})
  .pipe(gulp.dest((isDist) ? path.dist + '/js' : path.mock + '/js'));
  console.log('js完了');
});

gulp.task('copy', function () {
  var copySrc = [
    'lib',
    'img',
    'upload'
  ];
  return copySrc.forEach(function (name) {
    gulp.src(path[name])
    .pipe(gulp.dest((isDist) ? path.dist + '/' + name : path.mock + '/' + name));
  });
});

gulp.task('clean', function () {
  return gulp.src((isDist) ? path.dist + '/*' : path.mock + '/*').pipe(clean());
});

function watchSrc () {
  gulp.watch(['src/**/*.ejs'], ['ejs']);
  gulp.watch(['src/**/*.css'], ['css']);
  gulp.watch(['src/**/*.js'], ['js']);
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
  runSequece('dist', 'clean', ['ejs', 'css', 'ja', 'copy']);
  console.log('building ...');
});

gulp.task('check', function () {
  runSequece('dist', 'serve');
});

gulp.task('default', function () {
  console.log('hello gulp');
});
