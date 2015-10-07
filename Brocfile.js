var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var appCss = compileSass(['assets', 'bower_components'], 'app.scss', 'main.css');

module.exports = merge(['public', appCss]);
