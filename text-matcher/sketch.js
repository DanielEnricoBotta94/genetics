let w = 60;
let cells = [];
let current;
let cols, rows;
let stack = [];


function setup() {
    createCanvas(600, 600);
    background(51);

    rows = floor(height / w);
    cols = floor(width / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            cells.push(new Cell(i, j));
        }
    }

    current = cells[0];
}

function draw() {
    background(51)
    for (let c of cells) {
        c.show()
    }
    drawMaze()
}

function drawMaze() {
    current.visited = true;
    current.highlight();

    const next = current.checkNeighbour();

    if (next) {
        next.visited = true;

        stack.push(next);

        removeWalls(current, next)

        current = next;
    }
    else if (stack.length > 0) {
        current = stack.pop();
        
    }
    else {
        current = cells[0];
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

function removeWalls(current, next) {

    let di = current.i - next.i;

    if (di < 0) {
        current.walls[1] = false;
        next.walls[3] = false;
    }
    else if (di > 0) {
        current.walls[3] = false;
        next.walls[1] = false;
    }

    let dj = current.j - next.j;
    if (dj < 0) {
        current.walls[2] = false;
        next.walls[0] = false;
    }
    else if (dj > 0) {
        current.walls[0] = false;
        next.walls[2] = false;
    }
}



