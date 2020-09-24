exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['../tests/calc.js'],

	multiCapabilities: [
		// {
		// 	'browserName': 'safari'
		// },
		// {
		// 	'browserName': 'firefox'
		// },
		{
			'browserName': 'chrome'
		}
	],

	// Default is Jasmine.  If nothing mentioned - still it takes Jasmine
	framework: 'jasmine',
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	// HtmlReporter
	onPrepare: function () {
		// Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
		var HtmlReporter = require('protractor-beautiful-reporter');
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'Reports/screenshots'
		}).getJasmine2Reporter());
	},

	onPrepare: function () {
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: 'allure-results'
		}));
	}
};