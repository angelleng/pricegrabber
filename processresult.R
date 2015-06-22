# process search results: 

lines <- readLines("result.txt")
length(lines)
lines[3*1:678]
aaa <- t(matrix(lines, nrow = 3))
aaa.dt <- data.frame(aaa, stringsAsFactors=F)
aaa.dt <- aaa.dt[aaa.dt$Price != "Price is: Not available!!!",]
names(aaa.dt) <- c("Depart", "Return", "Price")
aaa.dt$Depart
depstr <- substring(aaa.dt$Depart, 22)
retstr <- substring(aaa.dt$Return, 20)
dep <- as.Date(depstr, "%B %d, %Y")
ret <- as.Date(retstr, "%B %d, %Y")

pricestr <- as.character(aaa.dt$Price)
price <- as.numeric(paste0(substr(pricestr, 11,11), substr(pricestr, 13, 15)))

match(aaa.dt$Depart, levels(aaa.dt$Depart))
levels(dep)
depfac <- as.factor(dep)
depcoord <- match(depfac, levels(depfac))
retfac <- as.factor(ret)
retcoord <- match(retfac, levels(retfac))

help("spMatrix")
priceMat <- spMatrix(nrow = 40, ncol = 56, i = depcoord, j = retcoord, x = price)

rownames(priceMat) <- levels(depfac)
colnames(priceMat) <- levels(retfac)
priceMat
