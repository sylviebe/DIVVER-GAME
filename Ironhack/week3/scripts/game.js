let buttonCreated = false;
let button;
let bg;
let myFont;
let mySound;
let mySecondSound;
let canPlaySound = false;

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
        createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
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
        if (this.gameOver) {
            text('Game Over', 320, 250);

            if (!buttonCreated) {
                button = createButton('play');
                button.class('btn');
                button.position(510, 440);
                button.mousePressed(this.resetGame);
                buttonCreated = true;
            }
        } else {
            background(0);
            line(0, 366, 1000, 366);
            textSize(32);
            fill(240);
            text(`SCORE:${this.score}`, 800, 50, 100);
            textSize(80);

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
