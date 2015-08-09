var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	autoprefix = require('gulp-autoprefixer'),
	htmlhint = require('gulp-htmlhint'),
	open = require('gulp-open'),
	plumber = require('gulp-plumber')
;

var paths = {
	js: ['app/js/script.js', 'app/js/donut.js'],
	css: 'app/scss/style.scss',
	images: 'app/images/**',
	html: 'app/*.html'
}

var destination = {
	js: 'dist/js',
	css: 'dist/css',
	images: 'dist/images',
	html: 'dist/',
	NAS: '/Volumes/web/krisvegh'
}

var options = {
	autoprefix: 'last 10 version',
	imagemin: {optimizationLevel: 3, progressive: true, interlaced: true},
	scss: {style: 'compressed', sourcemap: true},
	jshint: '',
	jshint_reporter: 'default',
	open: {app: 'Google Chrome'}
}

/* */ 
gulp.task('js', function() {
	gulp.src(paths.js)
	.pipe(plumber())
	.pipe(jshint(options.jshint))
	.pipe(jshint.reporter( options.jshint_reporter))
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest(destination.js))
	.pipe(livereload());
	});

gulp.task('css', function () {
    return sass(paths.css, options.scss) 
    .on('error', function (err) {
      console.error('Error!', err.message);
	})
    .pipe(autoprefix(options.autoprefix))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destination.css))
    .pipe(livereload());
	});

gulp.task('images', function() {
	return gulp.src(paths.images)
	.pipe(newer(destination.images))
	.pipe(imagemin(options.imagemin))
	.pipe(gulp.dest(destination.images))
	.pipe(livereload());
	});

gulp.task('html', function() {
	gulp.src(paths.html)
	.pipe(htmlhint())
	.pipe(htmlhint.reporter())
	.pipe(gulp.dest(destination.html))
	.pipe(livereload());
	});

gulp.task('reload', function() {
	livereload.reload();
	});

gulp.task('open', function() {
	gulp.src('dist/index.html')
	.pipe(open(options.open));
	})

gulp.task('watch', function() {
	livereload.listen(); 
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.html, ['html']);
	});

gulp.task('deploy-to-nas', function() {
	gulp.src('dist/**')
	.pipe(gulp.dest(destination.NAS))
	});

gulp.task('default', ['js', 'css', 'images', 'html', 'open', 'watch']);
