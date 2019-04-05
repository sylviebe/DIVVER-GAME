let game = new Game();

function preload() {
    mySound = loadSound('./gameoverover.wav');
    mySecondSound = loadSound('./sound-jump.wav');
    myBackgroundSound = loadSound('./background-sound.mp3');
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
    mySecondSound.play();
}
