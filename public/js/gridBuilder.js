const gridContainer = document.getElementsByClassName('grid-container')[0];

const clearGrid = () => {
  while ( gridContainer.hasChildNodes() ) {
    gridContainer.childNodes.forEach(x => gridContainer.removeChild(x));
  }
};

const makeARow = (colCount, rowNum) => {
  let aRow = document.createElement('div');
  aRow.classList.add('row');
  for (let i = -1; i <= colCount - 1; i++) {
    let aBox = document.createElement('div');
    if (i === -1) {
      aBox.classList.add('rowIndxNum');
      aBox.textContent = rowNum;
    }
    aBox.classList.add('cell');
    aBox.id = 'r'.concat(rowNum, 'c', i);
    aRow.appendChild(aBox);
  }
  gridContainer.appendChild(aRow);
};

const drawGrid = (resArr) => {
  const formStr = document.getElementById('wallHeightsStr').value;
  const wallValsArr = formStr.split(/\s|,/g).map( x => Number(x) );
  const height = Math.max.apply(null, wallValsArr);
  const width = wallValsArr.length;
  gridContainer.parentElement.classList.add('hasGrid');
  clearGrid();

  const minGraphHeight = Math.max(height,10);
  for (let rowCounter = minGraphHeight; rowCounter > 0; rowCounter--) {
    makeARow(width, rowCounter);
  }

  fillTowers(wallValsArr,resArr[0],resArr[1]);
};