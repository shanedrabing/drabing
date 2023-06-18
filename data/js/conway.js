let w;
let cols;
let rows;
let board;
let next;

function setup() {
    // set simulation framerate to 10 to avoid flickering
    frameRate(22);
    noStroke();

    // store the canvas in a pointer variable
    // now its methods can be accessed
    var canvas = createCanvas(windowWidth, windowHeight);

    // adding canvas as a child of a container
    canvas.parent("conway");

    // calculate cols and rows
    w = 12;
    cols = floor(width / w);
    rows = floor(height / w);

    // wacky way to make a 2d array is js
    board = new Array(cols);
    for (let i = 0; i < cols; i++) {
        board[i] = new Array(rows);
    }

    // going to use multiple 2d arrays and swap them
    next = new Array(cols);
    for (i = 0; i < cols; i++) {
        next[i] = new Array(rows);
    }

    nihil();
}

function draw() {
    background(255);
    fill(235);

    generate();

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if ((board[i][j] == 1)) {
                rect(i * w, j * w, w, w);
            }
        }
    }

}

// reset board when mouse is pressed
function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // mutation
            if (floor(random(10)) == 0) {
                board[i][j] = !board[i][j];
            }
        }
    }
}

// fill board randomly
function nihil() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j] = floor(random(2));
            next[i][j] = 0;
        }
    }
}

// the process of creating the new generation
function generate() {

    // loop through every spot in our 2d array and check spots neighbors
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {

            // add up all the states in a 3x3 surrounding grid
            let neighbors = 0;
            for (let i = -1; i <= 1; i++) {

                let xi = x + i;
                if (xi < 0) xi = cols - 1;
                else if (cols <= xi) xi = 0;

                for (let j = -1; j <= 1; j++) {

                    let yj = y + j;
                    if (yj < 0) yj = rows - 1;
                    else if (rows <= yj) yj = 0;

                    neighbors += board[xi][yj];
                }
            }

            // a little trick to subtract the current cell's state since
            // we added it in the above loop
            neighbors -= board[x][y];

            // rules of life
            if ((board[x][y] == 1) && (neighbors < 2)) {
                // loneliness
                next[x][y] = 0;
            } else if ((board[x][y] == 1) && (neighbors > 3)) {
                // overpopulation
                next[x][y] = 0;
            } else if ((board[x][y] == 0) && (neighbors == 3)) {
                // reproduction
                next[x][y] = 1;
            } else {
                // stasis
                next[x][y] = board[x][y];
            }
        }
    }

    // swap!
    let temp = board;
    board = next;
    next = temp;
}
