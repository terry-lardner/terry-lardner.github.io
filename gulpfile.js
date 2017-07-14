var gulp = require('gulp'); 

// include plug-ins
var concat      = require('gulp-concat');
var stripDebug  = require('gulp-strip-debug');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');


/*
 * Compile SASS files into CSS and combine 
 * into a single file, optimized for production
 */

var sass_files = [
  './css/bootstrap/css/bootstrap.min.css',
  './css/palette.scss', 
  './css/app.scss',
  './components/**/*.scss' // include all individual page styles 
]

gulp.task('sass', function () {
  console.log("Compiling SAAS...");
  gulp.src(sass_files)
    .pipe(concat("app.min.css"))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist')); 
});

var redirects_file = [
  './_redirects'
]

gulp.task('redirects', function () {
  console.log("moving _redirects file");
  gulp.src(redirects_file)
    .pipe(gulp.dest('./dist')); 
});

/* 
 * Combine all js files into single minified file 
 * optimized for production 
 */

var js_files = [
	'./js/app.js',
	'./js/app.constants.js',
  './components/**/*.js', // include all components 
  './services/*.js'  // include all services 
];

gulp.task('scripts', function() {
  
  console.log("Gulping JS...");

    gulp.src(js_files)
	    .pipe(concat("app.min.js"))
	    .pipe(stripDebug()) 
	    .pipe(uglify())
	    .pipe(gulp.dest("./dist/"));

});


/* 
 * Combine all Angular files into single minified file to reduce HTTP requests
 */

var ng_files = [
  './js/angular.min.js',
  './js/angular-route.min.js',
  './js/angular-resource.min.js'
];

gulp.task('angular', function() {
  
  console.log("Combining Angular files...");

    gulp.src(ng_files)
      .pipe(concat("lib.min.js"))
      .pipe(stripDebug()) 
      .pipe(uglify())
      .pipe(gulp.dest("./dist/"));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('components/**/*.js', ['scripts']);
    gulp.watch('services/*.js', ['scripts']);
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('components/**/*.scss', ['sass']);
});