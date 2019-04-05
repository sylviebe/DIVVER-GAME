let resetButtonCreated = false;
let startButtonCreated = false;
let gameStarted = false;
let resetButton;
let startButton;
let bg;
let myFont;
let mySound;
let mySecondSound;
let canPlaySound = false;

function startGame() {
    gameStarted = true;
    startButton.hide();
    myBackgroundSound.play();
    myBackgroundSound.loop();
}

class Game {
    constructor() {
        this.obstacleArray = [];
        this.player = new Player();
        this.width = 400;
        this.obstaclesSquares = [];
        this.gameOver = false;
        this.score = 0;
        this.obstacleNumber = 90;
    }

    setup() {
        //img = loadImage('/background-image.jpg');
        let canvas = createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
        canvas.parent('sketch-holder');
        frameRate(120);
        /* resetGame(); */
        this.obstacleArray.forEach(el => el.setup());
        this.player.setup();
    }
    resetGame() {
        document.location.reload();
    }

    draw() {
        clear();
        if (!gameStarted) {
            if (!startButtonCreated) {
                startButton = createButton('CLICK JUMP PLAY');
                startButton.class('btn');
                startButton.position(515, 450);
                startButton.mousePressed(startGame);
                startButton.size(250, 150);
                startButtonCreated = true;
            }
            textSize(30);
            fill(0);
            //text('the hard and simple jumping game', 80, 40);
            textSize(30);
            fill(252, 255, 0);
            //text('Just KLICK to JUMP', 400, 200);
        } else if (this.gameOver) {
            textSize(40);
            fill(252, 255, 0);
            textFont('Audiowide');
            text(`FINALSCORE:${this.score}`, 328, 200, 100);
            textSize(120);
            fill(240);
            textFont('Press Start 2P');
            text('Game Over', 150, 120);

            if (!resetButtonCreated) {
                resetButton = createButton('TRY AGAIN');
                resetButton.class('btn');
                resetButton.position(515, 450);
                resetButton.mousePressed(this.resetGame);
                resetButton.size(250, 150);
                resetButtonCreated = true;
            }
        } else {
            textFont('Audiowide');
            background(0);
            line(0, 366, 1000, 366);
            textSize(32);
            fill(240);
            text(`SCORE:${this.score}`, 420, 50, 100);

            this.player.show();
            this.obstacleArray.forEach(el => el.draw());
            this.obstacleArray.forEach(el => el.update());

            if (frameCount % this.obstacleNumber == 0) {
                this.createObstacle(); // add a new obstacle
            }
        }
    }

    createObstacle() {
        // X , Y , W , H , SPEED
        let obstaclevar = new Obstacles(1200, 326, 40, 40, -4, 240);
        let obstaclevarTwo = new Obstacles(1000, 366, 40, 40, -8, 0);
        this.obstacleArray.push(obstaclevar);
        this.obstacleArray.push(obstaclevarTwo);
    }

    over() {
        this.gameOver = true;
    }
}

let myInterval = setInterval(function() {
    game.obstacleNumber = Math.floor(Math.random() * 5 + 90);
    console.log(game.obstacleNumber);
}, 3000);
