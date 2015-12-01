var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	env = require('gulp-env');

gulp.task('test-api', function() {
	env({vars: {NODE_ENV: 'test'}});
	return gulp.src('test/api/**/*.test.js', {read: false})
		.pipe(mocha({reporter: 'spec'}));
});