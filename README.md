# pricegrabber
This is a tool based on phantomjs. http://phantomjs.org/ 


grab_gs.js: js code used for google flights. Google flights has a large database and it's fast, but it doesn't give you the link to book the flight.  
waitoncondition.js: for orbitz.com. Super super slow.  
flightsearch.R: generate urls for different combination of dates, then write commands to a shell script file.  
processresult.R: take the results and generate a matrix of prices. I will probably make it a heat map. 
