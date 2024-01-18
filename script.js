const gridContainer = document.querySelector(".grid-container");
const GRID_CONTAINER_WIDTH = 480;
const gridSizeSlider = document.querySelector("#slider");
const colorPicker = document.querySelector("#color-picker");
const gridSizeLabel = document.querySelector("#grid-size-label");

function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.style.width = `${GRID_CONTAINER_WIDTH / gridSizeSlider.value}px`;
  gridItem.style.height = `${GRID_CONTAINER_WIDTH / gridSizeSlider.value}px`;
  gridContainer.appendChild(gridItem);
  gridItem.addEventListener("mouseover", function () {
    gridItem.style.backgroundColor = `${colorPicker.value}`;
  });
}

function createGrid() {
  for (let i = 0; i < gridSizeSlider.value ** 2; i++) {
    createGridItem();
  }
  gridSizeLabel.innerText = `Grid size: ${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid();
}

createGrid();

gridSizeSlider.addEventListener("mouseup", resetGrid);
