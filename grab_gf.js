
var page = require('webpage').create(),
system = require('system'); 

if (system.args.length === 1) {
    console.log('Try to pass some args when invoking this script!');
    phantom.exit(); 
} else {
    address =  system.args[1].toString(); 
    page.open(
    address, 
    function (status) {
        var hahaha = 1; 
        if (status !== 'success') {
            console.log('FAIL to load the address');
            phantom.exit();
        }
        else {
            console.log("Starting to refresh"); 
            var interval = setInterval(function(){
                hahaha = hahaha + 1; 
                var pp = page.evaluate(function () {
                        return document.getElementsByClassName("EX3QBCC-c-pb").length > 0; 
                        });
                if (hahaha >= 6 && pp ) { 
                    console.log(hahaha); 
                    var k = page.evaluate(function () {
                        if (document.getElementsByClassName("EX3QBCC-c-pb").length > 0) {
                        return [document.getElementsByClassName("EX3QBCC-c-pb")[0].innerHTML, 
                        document.getElementsByClassName("EX3QBCC-J-m")[0].innerHTML,
                        document.getElementsByClassName("EX3QBCC-J-m")[1].innerHTML]; 
                        } else return ["Not available!!!", "Not available!!!","Not available!!!"]; 
                        });
                    console.log("Departure Date: " + k[1]); 
                    console.log("Return Date: " + k[2]); 
                    console.log("Price is: " + k[0]); 
                    phantom.exit();
                    clearInterval(interval); 
                } 
                }, 500);  
        } 
    }
    );
}



