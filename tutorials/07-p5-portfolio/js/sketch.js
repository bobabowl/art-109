let canvas;
let img;
let lx, ly, easing;

function preload() {
    img = loadImage('images/cow.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -1);

    image(img, 0, 0);

    lx = 0;
    ly = 0;
    easing = .05;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    lx = lx + ((mouseX - lx) * easing);
    ly = ly + ((mouseY - ly) * easing);

    drawThing(mouseX, mouseY);
    image(img, lx, ly);

}

function mouseMoved() {

}

function drawThing(lx, ly) {
    noStroke();
    fill(255, 140, 170);
    ellipse(lx, ly, 30, 30);
}