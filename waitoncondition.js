// function waitFor(testFx, onReady, timeOutMillis) {
//     var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 12000, //< Default Max Timout is 3s
//         start = new Date().getTime(),
//         condition = false,
//         interval = setInterval(function() {
//             console.log("aaaaaaaaaaa"); 
//             if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
//                 // If not time-out yet and condition not yet fulfilled
//                 condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
//                 console.log(condition); 
//                 // console.log(page.evaluate(function() {
//                 //         return ($(".airResultsMod").length > 0); 
//                 //     })); 
//             } else {
//                 if(!condition) {
//                     // If condition still not fulfilled (timeout but condition is 'false')
//                     console.log("'waitFor()' timeout");

//                     var k = page.evaluate(function () {
//                             return document.getElementsByTagName('html')[0].innerHTML
//                         });
//                     console.log(k);
//                     phantom.exit(1);
//                 } else {
//                     // Condition fulfilled (timeout and/or condition is 'true')
//                     console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
//                     typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
//                     clearInterval(interval); //< Stop this interval
//                 }
//             }
//         }, 1000); //< repeat check every 250ms
// };


var page = require('webpage').create(),
address = "http://www.orbitz.com/shop/home?type=air&ar.type=roundTrip&strm=true&ar.rt.leaveSlice.orig.key=DTW&_ar.rt.leaveSlice.originRadius=0&ar.rt.leaveSlice.dest.key=WUH&_ar.rt.leaveSlice.destinationRadius=0&ar.rt.leaveSlice.date=6%2F28%2F15&ar.rt.leaveSlice.time=Anytime&ar.rt.returnSlice.date=7%2F28%2F15&ar.rt.returnSlice.time=Anytime&_ar.rt.flexAirSearch=0&ar.rt.numAdult=1&ar.rt.numSenior=0&ar.rt.numChild=0&ar.rt.child%5B0%5D=&ar.rt.child%5B1%5D=&ar.rt.child%5B2%5D=&ar.rt.child%5B3%5D=&ar.rt.child%5B4%5D=&ar.rt.child%5B5%5D=&ar.rt.child%5B6%5D=&ar.rt.child%5B7%5D=&search=Search+Flights&_ar.rt.nonStop=0&_ar.rt.narrowSel=0&ar.rt.narrow=airlines&ar.rt.carriers%5B0%5D=&ar.rt.carriers%5B1%5D=&ar.rt.carriers%5B2%5D=&ar.rt.cabin=C";

// page.onResourceRequested = function (req) {
//     console.log('requested: ' + JSON.stringify(req, undefined, 4));
// };

// page.onResourceReceived = function (res) {
//     console.log('received: ' + JSON.stringify(res, undefined, 4));
// };

page.open(
    address, 
    function (status) {
        var hahaha = 1; 
        console.log(new Date().getTime()); 
        if (status !== 'success') {
            console.log('FAIL to load the address');
        }
        else {
            var interval = setInterval(function(){
                hahaha = hahaha + 1; 
                if (hahaha == 20) {

                     var k = page.evaluate(function () {
                        return document.getElementsByClassName("price")[0].childNodes[1].childNodes[1].innerHTML; 
                        });
                    
                    console.log("price is (2)" + k);
                    var p = page.evaluate(function () {
                        return document.getElementsByTagName('html')[0].innerHTML
                    });
                    console.log(p);
                    
                    phantom.exit();
                    clearInterval(interval); 
                } 
                }, 1000); 

            // waitFor(
            //     // "$('#global-actions').is(':visible');"
            //     function() {
            //         // Check in the page if a specific element is now visible
            //         return page.evaluate(function() {
            //             return ($(".airResultsMod") != null && $(".airResultsMod").length > 0); 
            //         });
            //     },
            //     function() {
            //         console.log("flight information is available");
            //         var k = page.evaluate(function () {
            //                 return document.getElementsByTagName('html')[0].innerHTML
            //             });
            //         phantom.exit();
            //     }, 
            //     120000);
        } 
    }
    ); 