import { create } from "simple-drawing-board";

const el = document.getElementById("canvas");
const toggleButton = document.getElementById("toggle-button");

console.log(el);

const sdb = create(el);

window.addEventListener("resize", function() {
    setCanvasSize();
});

window.addEventListener("keydown", function(e) {
    if ((e.key.toLowerCase() === "y" && e.ctrlKey) || (e.key.toLowerCase() === "z" && e.shiftKey && e.ctrlKey)) {
        sdb.redo();
    } else if (e.key.toLowerCase() === "z" && e.ctrlKey) {
        sdb.undo();
    } else if (e.key.toLowerCase() === "p" && e.ctrlKey) {
        sdb.clear();
    }
});

function setCanvasSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    el.width = width;
    el.height = height;
    setupSdb();
}

function setupSdb() {
    sdb.setLineSize(15);
    toggleButton.innerHTML = getButtonText(sdb.mode);
}

toggleButton.addEventListener("click", function() {
    sdb.toggleMode();
    toggleButton.innerHTML = getButtonText(sdb.mode);
});

setCanvasSize();
setupSdb();


function getButtonText(mode) {
    return mode === "draw" ? "Erase" : "Draw";
}