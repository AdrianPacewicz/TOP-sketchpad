const main = document.getElementById('main');
const btnNewGrid = document.getElementById('new-grid');

for ( let i = 1; i <= 256 ; i++) {
  let cell = document.createElement('div');
  cell.id = 'cell-' + i;
  cell.style.height = '40px';
  main.appendChild(cell);
  cell.classList.add('cells');
  cell.addEventListener('mouseenter', mouseEnterDiv);
  cell.addEventListener('mouseleave', mouseLeaveDiv);
}

btnNewGrid.addEventListener('click', btnNewGridClick);

function btnNewGridClick() {
  let pixels = prompt('Enter the number of pixels wide (from 16 to 100)');
  if (NaN.pixels || pixels < 16 || pixels > 100) {
    alert('Please enter a valid number.');
    return;
    }
  createNewGrid(pixels);
}

function createNewGrid(px) {
  let cellsToRemove = main.getElementsByClassName('cells');
  for (let i = cellsToRemove.length -1; i >= 0; i--) {
    cellsToRemove[i].remove();
  }
  let numOfCells = px*px;
  for (let j = 1; j <= numOfCells ; j++) {
    let cell = document.createElement('div');
    let size = 640 / px;
    cell.id = 'cell-' + j;
    cell.style.height = size + 'px';
    main.style.gridTemplateColumns = 'repeat(' + px + ', ' + size + 'px)';
    main.appendChild(cell);
    cell.classList.add('cells');
    cell.style.opacity
    cell.addEventListener('mouseenter', mouseEnterDiv);
    cell.addEventListener('mouseleave', mouseLeaveDiv);
  }
  
  
}

function mouseEnterDiv() {
  let opacity = Number(this.style.backgroundColor.slice(-4, -1));
  if (opacity <= 0.9) {
      this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
      this.classList.add('painted-cells');
  }
}

function mouseLeaveDiv() {

}

