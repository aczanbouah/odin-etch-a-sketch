const gridContainer = document.querySelector(".grid-container");
const GRID_CONTAINER_WIDTH = 480;
const gridSizeSlider = document.querySelector("#slider");

function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.style.width = `${GRID_CONTAINER_WIDTH / gridSizeSlider.value}px`;
  gridItem.style.height = `${GRID_CONTAINER_WIDTH / gridSizeSlider.value}px`;
  gridContainer.appendChild(gridItem);
}

function createGrid() {
  for (let i = 0; i < gridSizeSlider.value ** 2; i++) {
    createGridItem();
  }
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid();
}

gridSizeSlider.addEventListener("mouseup", resetGrid);

createGrid();
