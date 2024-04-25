function mincost(arr){ 
//write your code here
	arr.sort((a, b) => a - b);
	let min =0
	for (let i =0; i<arr.length; i++)	{
		  min += arr[i];
	}
// return the min cost
    return min;

  
}

module.exports=mincost;
