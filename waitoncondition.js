// page.onResourceRequested = function (req) {
//     console.log('requested: ' + JSON.stringify(req, undefined, 4));
// };

// page.onResourceReceived = function (res) {
//     console.log('received: ' + JSON.stringify(res, undefined, 4));
// };
// http://www.orbitz.com/shop/home?type=air&ar.type=roundTrip&strm=true&ar.rt.leaveSlice.orig.key=DTW&_ar.rt.leaveSlice.originRadius=0&ar.rt.leaveSlice.dest.key=WUH&_ar.rt.leaveSlice.destinationRadius=0&ar.rt.leaveSlice.date=7%2F1%2F15&ar.rt.leaveSlice.time=Anytime&ar.rt.returnSlice.date=8%2F1%2F15&ar.rt.returnSlice.time=Anytime&_ar.rt.flexAirSearch=0&ar.rt.numAdult=1&ar.rt.numSenior=0&ar.rt.numChild=0&ar.rt.child%5B0%5D=&ar.rt.child%5B1%5D=&ar.rt.child%5B2%5D=&ar.rt.child%5B3%5D=&ar.rt.child%5B4%5D=&ar.rt.child%5B5%5D=&ar.rt.child%5B6%5D=&ar.rt.child%5B7%5D=&search=Search+Flights&_ar.rt.nonStop=0&_ar.rt.narrowSel=0&ar.rt.narrow=airlines&ar.rt.carriers%5B0%5D=&ar.rt.carriers%5B1%5D=&ar.rt.carriers%5B2%5D=&ar.rt.cabin=C 

// Configure global variables: 


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
                        return document.getElementsByClassName("price").length > 0; 
                        });
                if (hahaha == 40 || pp) { 
                    console.log(hahaha); 
                    var k = page.evaluate(function () {
                        if (document.getElementsByClassName("price").length > 0) {
                        return [document.getElementsByClassName("price")[0].childNodes[1].childNodes[1].nodeValue, 
                        document.getElementsByClassName("departDate")[0].innerHTML.trim(),
                        document.getElementsByClassName("arriveDate")[0].innerHTML.trim()]; 
                        } else return ["Not available!!!", "Not available!!!","Not available!!!"]; 
                        });
                    console.log("Departure Date: " + k[1]); 
                    console.log("Arrival Date: " + k[2]); 
                    console.log("Price is: " + k[0]); 
                    phantom.exit();
                    clearInterval(interval); 
                } 
                }, 500);  
        } 
    }
    );
}



