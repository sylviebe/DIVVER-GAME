function Player() {
    //Startpunkt
    this.y = width / 1.162;
    this.x = 25;

    // Painting the Player
    this.show = function() {
        fill(144); // Farbe
        ellipse(this.x, this.y, 13, 13);
    };
}
