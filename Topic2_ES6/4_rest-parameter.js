//Rest parameter:
// 1. Rest parameter is used to get the rest of the parameters.
function sum(...args) {	
	let total = 0;
	for(let value of args)
		total += value;
	return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); //55