const gridContainer = document.getElementsByClassName('grid-container')[0];

const makeOneRow = (colCount, rowNum) => {
  let aRow = document.createElement('div');
  aRow.classList.add('row');
  aRow.id = 'row' + rowNum;

  for (let i = -1; i <= colCount - 1; i++) {
    let aBox = document.createElement('div');
    if (i === -1) {
      aBox.classList.add('rowIndxNum');
      aBox.textContent = rowNum || '';
    }
    aBox.classList.add('col');
    const idTxt = 'r'.concat(String(rowNum), 'c', i);
    aBox.id = idTxt;
    aRow.appendChild(aBox);
  }
  gridContainer.appendChild(aRow);
};

const drawGrid = () => {
  const formStr = document.getElementById('wallHeightsStr').value;
  const wallValsArr = formStr.split(/[\s,]/g);
  const numEntries = wallValsArr.length;
  const boxSize = 90 / (1.5 * numEntries);
  while (gridContainer.hasChildNodes()) {
    gridContainer.childNodes.forEach(x => gridContainer.removeChild(x));
  }
  gridContainer.parentElement.style.display = 'inline-block';
  let boxCount = numEntries;
  while (boxCount > 0) {
    makeOneRow(numEntries, boxCount);
    boxCount--;
  }

  document.querySelectorAll('.col').forEach(box => {
    box.style.width = String(boxSize).concat('vmin');
    box.style.height = String(boxSize).concat('vmin');
  });

  fillTowers(wallValsArr);
};