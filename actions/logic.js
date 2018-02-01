const getRightToLeftMaxes = arr => {
  let max = 0;
  return arr.reduceRight((retArr, elem) => {
    if (elem > max) {
      max = elem;
    }
    retArr = [max, ...retArr];
    return retArr;
  }, []);
};

const getPuddles = arr => {
  let max = 0;
  const maxesFromRightSide = getRightToLeftMaxes(arr);
  return arr.map((elem, indx) => {
    if (elem > max) {
      max = elem;
    }
    const slotMax = Math.min(maxesFromRightSide[indx], max);
    const waterAmt = slotMax - elem;
    return waterAmt < 0 ? 0 : waterAmt;
  });
};

const arrFromStr = str => {
  return str.split(/\s|,/g).reduce((r, x) => {
    if (x.length > 0) {
      r.push(Number(x));
    }
    return r;
  }, []);
};

const getWeirdOutputFormat = puddlesArr => {
  let ansArr = [null, null, 0];
  for (let i = 0; i < puddlesArr.length - 1; i++) {
    if (puddlesArr[i] === 0 && puddlesArr[i + 1] !== 0) {
      let runningSum = 0;
      let subArr = [i];
      while (puddlesArr[i + 1] !== 0) {
        runningSum += puddlesArr[i + 1];
        i++;
      }
      if (runningSum > ansArr[2]) {
        subArr.push(i + 1, runningSum);
        ansArr = subArr;
      }
    }
  }
  return ansArr;
};

const getBiggestPuddle = dataStr => {
  const arr = arrFromStr(dataStr);
  const puddlesArr = getPuddles(arr);
  return getWeirdOutputFormat(puddlesArr);
};

module.exports = { getRightToLeftMaxes, getPuddles, arrFromStr, getWeirdOutputFormat, getBiggestPuddle };