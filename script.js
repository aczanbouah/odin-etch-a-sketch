// box size = container width / number of boxes

const gridContainer = document.querySelector(".container");

function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.style.width = 120 + "px";
  gridItem.style.height = 120 + "px";
  gridContainer.appendChild(gridItem);
}

for (let i = 0; i < 16; i++) {
  createGridItem();
}
