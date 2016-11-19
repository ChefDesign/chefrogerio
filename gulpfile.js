var gulp = require( 'gulp' ),
imagemin = require('gulp-imagemin'),
less = require('gulp-less'),
path = require('path');
;

var $ = require('gulp-load-plugins')({rename: {'gulp-rev-delete-original':'revdel', 'gulp-if': 'if'}});

gulp.task('build-img', function(){
  gulp.src('img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

/* Minificação */
gulp.task('minify-js', function() {
  return gulp.src('./js/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function() {
  return gulp.src('dist/css/**/*.css')
    .pipe($.cssnano({safe: true}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('minify-html', function() {
  return gulp.src('dist/**/*.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});
