class Obstacles {
    constructor(x, y, width, height, speed, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
    }
    draw() {
        fill(255, 61, 206);

        rect(this.x, this.y, this.width, this.height);
        this.checkCollision();
    }
    update() {
        this.x += this.speed;
    }

    checkCollision() {
        // STONE

        if (this.y == 326) {
            const obstaclevar = {
                left: this.x,
                right: this.x + this.width,
                top: 366 - this.height,
                bottom: 366
            };

            if (intersectRect(obstaclevar, game.player)) {
                game.over();
            }

            if (obstaclevar.right == 200) {
                game.score++;
            }

            // if the obstacles right end is smaller than the players left end
            //

            // HOLE
        } else if (this.y == 366) {
            const obstaclevar2 = {
                left: this.x,
                right: this.x + this.width,
                top: 366,
                bottom: 366 + this.height
            };
            if (intersectHoles(obstaclevar2, game.player)) {
                game.over();
                mySound.play();
            }

            if (obstaclevar2.right == 200) {
                game.score++;
            }
        }

        function intersectRect(r1, r2) {
            return !(
                r2.left > r1.right ||
                r2.right < r1.left ||
                r2.top > r1.bottom ||
                r2.bottom < r1.top
            );
        }

        function intersectHoles(r1, r2) {
            return r2.right > r1.left + 20 && r2.bottom + 1 > r1.top && r2.left < r1.right - 20;
        }

        /* function score(r1, r2) {
            return r2.left > r1.right;
        } */
    }
}
