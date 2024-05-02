module.exports = {
	globDirectory: 'in/',
	globPatterns: [
		'**/*.{txt,js,css,html}'
	],
	swDest: 'in/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};