let homePage = require('../pages/homePage');

describe('Testing Super Calculator SPA which is made using NG', function () {

	it('Numeric Addition Test:', function () {
		// browser.get("http://juliemr.github.io/protractor-demo/");
		// element(by.model('first')).sendKeys('5');
		// element(by.model('second')).sendKeys('4');
		// element(by.css('[ng-click="doAddition()"]')).click();
		// expect(element(by.className("ng-binding")).getText()).toEqual("9");

		homePage.get('http://juliemr.github.io/protractor-demo/');
		homePage.enterfirst_Num('3');
		homePage.entersecond_Num('6');
		homePage.clickGo();
		homePage.verifyResultOfOperation('10');
		browser.sleep(5000);
	});

});