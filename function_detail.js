// Array:
	//array.every( function(currentValue, index, arr), thisValue )
	//		return value: true/false
	// 	 	NOT execute the function for empty elements
	//		NOT change the original array.


	//array.fill(value, start, end)
	// 	 	return value: the modified array

	//array.filter( function(currentValue, index, arr), thisValue )
	//		return value: new array of elements that return true. 
	//				  	  empty array if all elements return false.
	//		NOT execute the function for empty elements
	//		NOT change the original array.

	//array.find( function(currentValue, index, arr), thisValue )
	//		return value: the VALUE of the first element in the array that return true.
	//				  	  undefined if all elements return false.
	//		NOT change the original array.

	//array.findIndex( function(currentValue, index, arr), thisValue )
	//		return value: the index of the first element in the array that pass the test.
	//				  	  -1 if no elements pass the test.
	//		NOT change the original array.

	//array.flat(depth): depth is optional, default is 1
	//		return value: dàn phẳng array theo độ sâu nếu có phần tử là 1 mảng.

	//array.forEach( function(currentValue, index, arr), thisValue )
	//		return value: undefined
	//		- thisValue: optional. A value to be passed to the function to be used as its "this" value.

	//array.sort(compareFunction)
	//		return value: sorted array. Overwrite the original array.
	//		- compareFunction: optional. Default: compare as string and ascending order.
	//			+ function(a, b){return a - b}: sort by return value negative, 0, positive

// String:
	//localeCompare(string2, locales, options)