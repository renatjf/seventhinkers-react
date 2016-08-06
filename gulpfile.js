'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const express = require('express');
const instant = require('instant');


gulp.task('build', function(){

	return browserify('./site/assets/App.js', {
		debug: true
	})

	.transform(babelify.configure({
		presets:['es2015', 'react']
	}))

	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./site/js'));

});


gulp.task('server', function () {
	const app = express();
	app.use(instant({ root: 'site'}));
	app.get('*', 	function(req, res) {
		res.sendFile('index.html')
	});

	app.listen(3000, function() {
		console.log('abrindo porta 3000')
	})
});


gulp.task('dev', ['build','server'], function(){
	gulp.watch('./site/assets/**/*.js', ['build']);
});
