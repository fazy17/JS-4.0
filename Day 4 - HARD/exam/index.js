'use_strict'; 

function getFriendlyNumbers(start, end) {
	let arr = [];
		if ((typeof(start)) != 'string' && (typeof(end)) != 'string' && (start || 0) == start && (end || 0) == end && start > 0 && end > 0 && end >= start){

			for (let a = start; a <= end; a++) {
	    	for (let b = start; b <= end; b++) {
	      	if (FriendlyNumber(a, b) && a != b & a > b) {
	       	 arr.push([a, b].sort());
	      	    }
	    	}
	  	}
		} else {
			 return false;
        }

    return arr;
    
    
}
getFriendlyNumbers(1, 300);

function getSum(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

function FriendlyNumber(a, b) {
    if (getDivisorsSum(a) == b & getDivisorsSum(b) == a) { 
        return true; 
    } 
}

function getDivisors(num){
    var arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i == 0){
            arr.push(i);
        }
    }

    return(arr)
}

function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}

module.exports = {
    firstName: 'Danil',
    secondName: 'Tretyakov',
    task: getFriendlyNumbers
}