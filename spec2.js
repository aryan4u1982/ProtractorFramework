const { browser } = require("protractor");

describe('enter name feature', function()
{
    var firstNumber =  element(by.model('first'));
    var secondNumber =  element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var operationmul = element(by.xpath('//option[4]'));
    var operationsub = element(by.xpath('//option[5]'));
    var result= element(by.css('h2.ng-binding'));
    var val;
    var history = element.all(by.repeater('result in memory'));

  /*  beforeEach(function(){  // this will execute befoe each it block
        browser.get('https://juliemr.github.io/protractor-demo/');
    });*/

    it('should have title as', function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');
      expect(browser.getTitle()).toEqual('Super Calculator');
    
    });
    it('calculate as', function()
    {
        
        firstNumber.sendKeys('5');
        secondNumber.sendKeys('10');
        goButton.click();
        browser.driver.sleep(3000) ;
        val=result.getText();
        expect(val).toEqual('15');
       
    });

    it('multiply as', function()
    {
        
        firstNumber.sendKeys(val);
        secondNumber.sendKeys('10');
        element(by.model('operator')).click();
        operationmul.click();
        goButton.click();
        browser.driver.sleep(3000) ;
        val=result.getText();
        expect(val).toEqual('150');
        
    });


    it('substract as', function()
    {
        
        firstNumber.sendKeys(val);
        secondNumber.sendKeys('15');
        element(by.model('operator')).click();
        operationsub.click();
        goButton.click();
        browser.driver.sleep(3000) ;
        expect(result.getText()).toEqual('135');
        
    });

    it('check the history', function()
    {
        expect(history.count()).toEqual(3);
    });
});

