class Game {
    constructor() {
        this.obstacleArray = [];
        this.player = new Player();
        this.width = 400;
        this.obstaclesSquares = [];
        this.gameOver = false;
        this.score = 0;
    }

    setup() {
        createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
        frameRate(120);
        this.obstacleArray.forEach(el => el.setup());
        this.player.setup();
    }

    draw() {
        clear();

        if (this.gameOver) {
            textSize(80);
            text('Game Over', 320, 200);
        } else {
            background(45, 154, 154);
            line(0, 366, 1000, 366);
            this.player.show();
            this.obstacleArray.forEach(el => el.draw());
            this.obstacleArray.forEach(el => el.update());

            if (frameCount % 90 == 0) {
                this.createObstacle(); // add a new obstacle
            }
        }
    }

    createObstacle() {
        // X , Y , W , H , SPEED
        let obstaclevar = new Obstacles(1200, 326, 40, 40, -4);
        let obstaclevarTwo = new Obstacles(1000, 366, 40, 40, -2, 240);
        this.obstacleArray.push(obstaclevar);
        this.obstacleArray.push(obstaclevarTwo);
    }

    over() {
        this.gameOver = true;
    }
}

/*draw() {
        clear();
        background(0);
        if (this.gameOver) {
            textSize(50);
            text('Game Over', 10, 30);
            textColor('white');
        } else {
            this.player.show();
            this.obstacles.forEach(function(obstacle) {
                obstacle.draw();
            });
        }*/
