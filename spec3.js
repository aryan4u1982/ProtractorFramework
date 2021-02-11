let calc = require('./pages/calc');

const { browser } = require("protractor");

describe('calculations', function(){
    it ('Addition', function(){

        calc.get('https://juliemr.github.io/protractor-demo/');
        calc.enterfirstNumber('5');
        calc.entersecondNumber('10');
        calc.applyAdition();
        calc.goClick();
        calc.validateResult('15');

    });

    it ('Multiply', function(){

        calc.get('https://juliemr.github.io/protractor-demo/');
        calc.enterfirstNumber('10');
        calc.entersecondNumber('15');
        calc.applyMultiple();
        calc.goClick();
        calc.validateResult('150');

        
    });


    it ('Substract', function(){

        calc.get('https://juliemr.github.io/protractor-demo/');
        

        calc.enterfirstNumber('150');
        calc.entersecondNumber('15');
        calc.applySubtract();
        calc.goClick();
        calc.validateResult('135');
    });
});

