const { browser } = require("protractor");

describe('enter name feature', function()
{
    var firstNumber =  element(by.model('first'));
    var secondNumber =  element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var operation = element(by.xpath('//option[4]'));
    var result= element(by.css('h2.ng-binding'));
    var val;

    beforeEach(function(){  // this will execute befoe each it block
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    it('should have title as', function()
    {
        
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
        operation.click();
        goButton.click();
        browser.driver.sleep(3000) ;
        expect(result.getText()).toEqual('150');
        
    });
});

