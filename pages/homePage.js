let homePage = function () {

  const first_Num = element(by.model('first'));
  const second_Num = element(by.model('second'));
  const go_button = element(by.css('[ng-click="doAddition()"]'))
  const result_Op = element(by.className('ng-binding'));

  this.enterfirst_Num = function (firstNum) {
    first_Num.sendKeys(firstNum);
  };

  this.entersecond_Num = function (secondNum) {
    second_Num.sendKeys(secondNum);
  };

  this.clickGo = function () {

    go_button.click();
  };

  this.verifyResultOfOperation = function (output) {
    expect(result_Op.getText()).toEqual(output);
  };

  this.get = function (url) {
    browser.get(url);
  };
};

module.exports = new homePage();
