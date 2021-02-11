const { browser, by } = require("protractor")

describe('enter name feature', function()
{

    beforeEach(function(){

    });
    it('should enter name as', function()
    {
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Gagan');
        var text = element(by.css('h1.ng-binding'));
        expect(text.getText()).toEqual('Hello Gagan!');     
    });
});

describe('free crm title test', function()
{
    it('get title text',function(){

        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        element(by.model('first')).sendKeys('5');
        browser.driver.sleep(3000);
        element(by.model('second')).sendKeys('10');
        element(by.id('gobutton')).click();
        browser.driver.sleep(3000);
        expect(element(by.css('h2.ng-binding')).getText()).toEqual('15');

    });
});