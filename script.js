const gridContainer = document.querySelector(".grid-container");
const GRID_CONTAINER_WIDTH = 480;
const gridSizeSlider = document.querySelector("#slider");
const colorPicker = document.querySelector("#color-picker");
const gridSizeLabel = document.querySelector("#grid-size-label");
let allGridItems;
const colorModeBtn = document.querySelector("#color-mode");
const rainbowModeBtn = document.querySelector("#rainbow-mode");
const eraserModeBtn = document.querySelector("#eraser-mode");
const resetGridBtn = document.querySelector("#reset-grid");
const activeMode = document.createElement("p");
const colorPickerContainer = document.querySelector(".color-picker-container");
colorPickerContainer.appendChild(activeMode);

gridSizeSlider.addEventListener("mouseup", resetGrid);
colorModeBtn.addEventListener("click", colorMode);
rainbowModeBtn.addEventListener("click", rainbowMode);
eraserModeBtn.addEventListener("click", eraserMode);
resetGridBtn.addEventListener("click", resetGrid);

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
  gridSizeLabel.innerText = `Grid size: ${gridSizeSlider.value} x ${gridSizeSlider.value}`;
  allGridItems = document.querySelectorAll(".grid-item");
  colorMode();
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid();
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
    0,
    255
  )}, ${getRandomNumber(0, 255)})`;
}

function rainbowMode() {
  allGridItems.forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  });
  activeMode.innerText = "Active mode: rainbow mode";
}

function colorMode() {
  allGridItems.forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = `${colorPicker.value}`;
    });
  });
  activeMode.innerText = "Active mode: color mode";
}

function eraserMode() {
  allGridItems.forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = `#fff`;
    });
  });
  activeMode.innerText = "Active mode: eraser mode";
}

createGrid();
