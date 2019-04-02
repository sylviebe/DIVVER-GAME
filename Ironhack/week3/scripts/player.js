class Player {
    constructor() {
        this.width = 400;
        this.y = this.width / 1.162;
        this.x = 260;
        this.radius = 21;
        this.left = this.x - this.radius + 1.5;
        this.right = this.x + this.radius - 1.5;
        this.bottom = this.y;
        this.velocity = 0;
        this.firstMouseClick = true;
    }

    show() {
        this.bottom = this.y + this.radius;
        this.top = this.y - this.radius;
        fill(145, 90, 90); // Farbe
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

        if (mouseIsPressed && this.y >= this.width / 1.162) {
            this.inAir = true;
            /* this.y -= 5; */
            if (this.firstMouseClick == true) {
                this.velocity = -5;
                this.firstMouseClick = false;
            }
            this.velocity += ACCELERATION * -5;
        } else {
            this.firstMouseClick = true;
            this.velocity += ACCELERATION;
        }
        this.y += this.velocity;
        if (this.y > this.width / 1.162) {
            this.y = this.width / 1.162;
            this.velocity = 0;
        }
    }
}
