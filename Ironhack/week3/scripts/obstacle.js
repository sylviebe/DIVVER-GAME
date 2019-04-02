class Obstacles {
    constructor(x, y, width, height, speed) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    draw() {
        fill(20, 200, 20);
        rect(this.x, this.y, this.width, this.height);
        this.checkCollision();
    }
    update() {
        this.x += this.speed;
    }

    checkCollision() {
        // STEIN
        // LOCH

        if (this.y == 326) {
            const obstaclevar = {
                left: this.x,
                right: this.x + this.width,
                top: 366 - this.height,
                bottom: 366
            };

            if (intersectRect(obstaclevar, player)) {
                noLoop();
            }
        } else if (this.y == 366) {
            const obstaclevar2 = {
                left: this.x,
                right: this.x + this.width,
                top: 366,
                bottom: 366 + this.height
            };
            if (intersectHoles(obstaclevar2, player)) {
                noLoop();
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
    }
}
