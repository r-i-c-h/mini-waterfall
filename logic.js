// Big O: O(2) - have to search entire array a few times, but not n times.
// CONSTRAINTS: Using ints. That's about it. No guarantees there will even be a successful answer.
// Look for a Pattern of leftVal > _[one or more slots]Val_ < rightVal.
// the leftmost and rightmost positions cannot possibly contain water.
// Every puddle must begin and end with a tower that has no water on top of it.

// Approach: 
// Go through the array calculating the max value 'to the left' of each available slot
// Go through the array calculating the max value 'to the right' of each slot
// Take the lesser of those two values as a maxLimit for that slot to be third array
// Make a fourth array where you subtract the height of that slot from its maxLimit. If it is >0, it will contain that much water.
// As soon as you hit a 0 or less value, you have hit an interruption, so push it as an array answer, then continue the process starting with the previous end-slot as a new start slot.  
    
    // given [0,1,2,0,4,0,6,4,0,1,0]
           // 0 1 2 3 4 5 6 7 8 9,X

const getMaxWallsToLeft = (arr) => {
  if (arr.length === 0) { return []; }
  let max = 0;
  return arr.map( (elem, indx) => {
    if (elem > max) { max = elem; }
    return max;
  });
}

const getMaxWallsToRight = (arr) => {
  if (arr.length === 0) { return []; }
  let max = 0;
  return arr.reduceRight( (ret, elem) => {
    if (elem > max) { max = elem; }
    return ret = [max].concat(ret);
  },[]);
}

const getWallWaterAmounts = (arr) => {
  const ltWallsMaxArr = getMaxWallsToLeft(arr);
  const rtWallsMaxArr = getMaxWallsToRight(arr);
  return arr.map( (elem, indx) => {
    if (elem === 0){ return 0 }
    const natualSlotMax = Math.min( ltWallsMaxArr[indx], rtWallsMaxArr[indx] );
    const waterAmt = natualSlotMax - elem;
    return waterAmt < 0 ? 0 : waterAmt;
  });
}




module.exports = { getMaxWallsToLeft, getMaxWallsToRight, getWallWaterAmounts }