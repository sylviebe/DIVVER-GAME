let player = new Player();
let width = 400;
function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(45, 154, 154);
    line(0, 366, 1000, 366);
    player.show();

    //Obstacle up
    fill(245, 0, 10);
    rect(600, 326, 40, 40);
    //Obstacle down
    fill(245, 0, 200);
    rect(400, 366, 40, 40);
}
