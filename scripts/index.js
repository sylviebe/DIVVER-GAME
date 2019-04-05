let game = new Game();

function preload() {
    mySound = loadSound('DIVVER-GAME/gameoverover.wav');
    mySecondSound = loadSound('DIVVER-GAME/sound-jump.wav');
    myBackgroundSound = loadSound('DIVVER-GAME/background-sound.mp3');
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
