var num = [16, 24, 64]
let maxNum = Math.max(...num) 
						
function getGCD(){    			
    num.forEach(function (numNum){
        if (maxNum === 0){
            return 1;
        }

	if (numNum % maxNum === 0) { 
	  return maxNum;
	}

        maxNum--; 
        getGCD();    	
    });

    return maxNum;
}

console.log (getGCD())