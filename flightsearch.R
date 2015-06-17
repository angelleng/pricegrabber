a <- "http://www.orbitz.com/shop/home?type=air&ar.type=roundTrip&strm=true&ar.rt.leaveSlice.orig.key=DTW&_ar.rt.leaveSlice.originRadius=0&ar.rt.leaveSlice.dest.key=WUH&_ar.rt.leaveSlice.destinationRadius=0&ar.rt.leaveSlice.date=7%2F1%2F15&ar.rt.leaveSlice.time=Anytime&ar.rt.returnSlice.date=8%2F1%2F15&ar.rt.returnSlice.time=Anytime&_ar.rt.flexAirSearch=0&ar.rt.numAdult=1&ar.rt.numSenior=0&ar.rt.numChild=0&ar.rt.child%5B0%5D=&ar.rt.child%5B1%5D=&ar.rt.child%5B2%5D=&ar.rt.child%5B3%5D=&ar.rt.child%5B4%5D=&ar.rt.child%5B5%5D=&ar.rt.child%5B6%5D=&ar.rt.child%5B7%5D=&search=Search+Flights&_ar.rt.nonStop=0&_ar.rt.narrowSel=0&ar.rt.narrow=airlines&ar.rt.carriers%5B0%5D=&ar.rt.carriers%5B1%5D=&ar.rt.carriers%5B2%5D=&ar.rt.cabin=C"

departure_date <- as.Date("2015-07-01") + 1:40; departure_date
return_date <- lapply(departure_date, function(i) i + 24:40); return_date
names(return_date) <- departure_date

rt <- do.call("c", return_date)

dp <- sort(rep(departure_date, length(return_date[[1]])))

pairs <-  data.frame(departure = dp, returndate = rt)

distinct <- cbind(format(pairs, "%m"),format(pairs, "%d"))
names(distinct) <- c("d_month", "r_month", "d_day", "r_day")

urls <- 
paste0("http://www.orbitz.com/shop/home?type=air&ar.type=roundTrip&strm=true&ar.rt.leaveSlice.orig.key=DTW&_ar.rt.leaveSlice.originRadius=0&ar.rt.leaveSlice.dest.key=WUH&_ar.rt.leaveSlice.destinationRadius=0&ar.rt.leaveSlice.date=", 
       distinct$d_month, "%2F",distinct$d_day, "%2F15&ar.rt.leaveSlice.time=Anytime&ar.rt.returnSlice.date=", distinct$r_month, "%2F", distinct$r_day, "%2F15&ar.rt.returnSlice.time=Anytime&_ar.rt.flexAirSearch=0&ar.rt.numAdult=1&ar.rt.numSenior=0&ar.rt.numChild=0&ar.rt.child%5B0%5D=&ar.rt.child%5B1%5D=&ar.rt.child%5B2%5D=&ar.rt.child%5B3%5D=&ar.rt.child%5B4%5D=&ar.rt.child%5B5%5D=&ar.rt.child%5B6%5D=&ar.rt.child%5B7%5D=&search=Search+Flights&_ar.rt.nonStop=0&_ar.rt.narrowSel=0&ar.rt.narrow=airlines&ar.rt.carriers%5B0%5D=&ar.rt.carriers%5B1%5D=&ar.rt.carriers%5B2%5D=&ar.rt.cabin=C")
quotedurls <- paste0("\"", urls, "\"")

scripts <- paste("phantomjs", "waitoncondition.js", quotedurls)
scripts <- c("#!/bin/bash", "set -x #echo on", scripts)
writeLines(scripts, "autoscripts.sh")
