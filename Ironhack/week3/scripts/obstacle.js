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
    }
    update() {
        this.x += this.speed;
    }
}
