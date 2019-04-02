//function setup() {}

//function draw() {}

class Player {
    constructor() {
        this.width = 400;
        this.y = this.width / 1.162;
        this.x = 260;
        this.velocity = 0;
        this.firstMouseClick = true;
    }

    show() {
        fill(145, 90, 90); // Farbe
        ellipse(this.x, this.y, 42, 42);
    }

    //setup()
}

//Mouse is pressed

if (mouseIsPressed) {
    if (this.firstMouseClick) {
        this.velocity = -6;
        this.firstMouseClick = false;
    }
    this.velocity += ACCELERATION * -1;
} else {
    this.firstMouseClick = true;
    this.velocity += ACCELERATION;
}
