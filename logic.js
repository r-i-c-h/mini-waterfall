const getRightToLeftMaxes = (arr) => {
  let max = 0;
  return arr.reduceRight( (retArr, elem) => {
    if (elem > max) { max = elem; }
    retArr = [max, ...retArr]
    return retArr;
  },[]);
}

const getPuddles = (arr) => {
  let max = 0;
  const maxesFromRightSide = getRightToLeftMaxes(arr);
  return arr.map( (elem, indx) => {
    if (elem > max) { max = elem; }
    const slotMax = Math.min( maxesFromRightSide[indx], max );
    const waterAmt = slotMax - elem;
    return waterAmt < 0 ? 0 : waterAmt;
  });
}

const getBiggestPuddle = (arr) => {
  const invertGraph = getPuddles( arr.slice() ); 
  let ansArr = [null,null,0];

  for (let i = 0; i < invertGraph.length - 1; i++) {  // From first to 2nd-to-last
    if (invertGraph[i] === 0 && invertGraph[i+1] !== 0) {
      let subArr = [];
      let runningSum = 0;
      
      subArr.push(i);
      while (invertGraph[i+1] !== 0) {
        runningSum += invertGraph[i+1];
        i++;
      }
      if (runningSum > ansArr[2]) {
        subArr.push(i+1, runningSum);
        ansArr = subArr;
      }
    }
  }
  return ansArr;
}

module.exports = { getRightToLeftMaxes, getPuddles, getBiggestPuddle }