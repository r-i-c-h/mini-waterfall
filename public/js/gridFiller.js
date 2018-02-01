const fillTowers = (walls,leftLimit,rightLimit) => {
  const towerValues = walls.map( x => Number(x) );
  towerValues.forEach( (towerHeight, indx) => {
    const towerCol = indx;
    let row = 1;
    while ( row <= towerHeight ) {
      const idStr = 'r'+row+'c'+towerCol;
      const thisBrick = document.getElementById(idStr)
      thisBrick.classList.add('brick');
      if (towerCol === leftLimit || towerCol === rightLimit ){
        thisBrick.classList.add('magicWall');
      }
      row++;
    }
  });
  fillWater(walls);
};

const fillWater = (towersArr) => {
  const waterAmounts = getPuddles(towersArr);
  waterAmounts.forEach( (waterQty, indx) => {
    if (waterQty > 0) {
      let row = Number(towersArr[indx])+1;
      while (row <= towersArr[indx] + waterQty) {
        const idStr = 'r'+row+'c'+indx;
        document.getElementById(idStr).classList.add('water');
        row++;
      }
    }
  });
};

const getRightToLeftMaxes = (arr) => {
  let max = 0;
  return arr.reduceRight( (retArr, elem) => {
    if (elem > max) { max = elem; }
    retArr = [max, ...retArr]
    return retArr;
  },[]);
};

const getPuddles = (arr) => {
  let max = 0;
  const maxesFromRightSide = getRightToLeftMaxes(arr);
  return arr.map( (elem, indx) => {
    if (elem > max) { max = elem; }
    const slotMax = Math.min( maxesFromRightSide[indx], max );
    const waterAmt = slotMax - elem;
    return waterAmt < 0 ? 0 : waterAmt;
  });
};