let game = new Game();

function preload() {
    mySound = loadSound('/game-over.wav');
    mySecondSound = loadSound('/arc-hit.wav');
    myThirdSound = loadSound('/hit-hole-2 (1).flac');
}

function setup() {
    game.setup();
    textSize(80);

    textFont('Press Start 2P');
    /*  mySound.loop(); */
}

function draw() {
    game.draw();
}
function mousePressed() {
    myThirdSound.play();
}
