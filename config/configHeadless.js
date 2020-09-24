var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['tests/calc.js'],

	capabilities: {
		browserName: 'firefox',

		'moz:firefoxOptions': {
			args: ["--headless", "--disable-gpu", "--window-size=800,600"]
		}
	},

	onPrepare: function () {
		// Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'Reports/screenshots'
		}).getJasmine2Reporter());
	}

};