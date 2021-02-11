const { browser } = require("protractor");

let calc= function(){
    let firstNumber =  element(by.model('first'));
    let secondNumber =  element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let operationmul = element(by.xpath('//option[4]'));
    let operationadd = element(by.xpath('//option[1]'));
    let operationsub = element(by.xpath('//option[5]'));
    let result= element(by.css('h2.ng-binding'));
    let dropd = element(by.model('operator'));
    let actualvalue;

    this.get = function (url){

        browser.get(url);
    };

    this.enterfirstNumber = function(value){

        firstNumber.sendKeys(value);
    };

    this.entersecondNumber = function(value){

        secondNumber.sendKeys(value);
    };

    this.goClick = function(){

        goButton.click();
        browser.sleep(3000);
    };

    this.applyMultiple = function(){

        dropd.click();
        operationmul.click();
    };

    this.applySubtract = function(){

        dropd.click();
        operationsub.click();
    };

    this.applyAdition = function(){

        dropd.click();
        operationadd.click();
    };

    this.validateResult = function(expectedValue){
      actualvalue= result.getText();
        expect(actualvalue).toEqual(expectedValue);
    };

};

module.exports = new calc();