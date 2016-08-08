'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const express = require('express');
const instant = require('instant');


//config
const empresa = "Seven Thinkers";
const SRC_JS = "./site/assets/App.js";
const NAME_BUNDLE = "site-bundle.js";
const DEST_BUNDLE = "./site/js";
const DEST_PORTAL = "site";
const EXECUTE_PORTAL = "index.html";
//end config

gulp.task('build', function(){

	return browserify(SRC_JS, {
		debug: true
	})

	.transform(babelify.configure({
		presets:['es2015', 'react']
	}))

	.bundle()
	.pipe(source(NAME_BUNDLE))
	.pipe(gulp.dest(DEST_BUNDLE));

});


gulp.task('server', function () {
	const app = express();
	app.use(instant({ root: DEST_PORTAL}));
	app.get('*', 	function(req, res) {
		res.sendFile(EXECUTE_PORTAL)
	});

	app.listen(3000, function() {
		console.log('Abrindo porta 3000');
		console.log('Executando Portal', empresa);
	})
});


gulp.task('dev', ['build','server'], function(){
	gulp.watch('./site/assets/**/*.js', ['build']);
});
