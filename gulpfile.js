var gulp = require('gulp'),
	mocha = require('gulp-mocha');

gulp.task('test-api', function() {
	return gulp.src('test/api/**/*.test.js', {read: false})
		.pipe(mocha({reporter: 'spec'}));
});