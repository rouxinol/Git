function dBmToW(a) {
	
    	return Math.pow(10, (a - 30)/10)
		}
function dBmToV(a) {
		b = 10 * Math.log10(20)
    	return Math.pow(10, (a - b)/20)
		}

		