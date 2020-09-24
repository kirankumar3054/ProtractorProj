
To start Protractor webDriver Manger:
webdriver-manager start

To execute Test cases, we need to trigger config file.
krudrangi@it-mbp-krudrangi (master) ~/eclipse-workspace/ProtractorProj: protractor config/config.js




// This project generates allure report after each execution.  The allure-results/ folder is added to git ignore - to not to add resulsts to git.


Git:
krudrangi@it-mbp-krudrangi (master) ~/eclipse-workspace/ProtractorProj:
git config --global user.name "kirankumar3054@gmail.com"
git config --global user.email "kirankumar3054@gmail.com"


// to test Non-Angular application need below line of code.
browser.waitForAngularEnalbed(false);