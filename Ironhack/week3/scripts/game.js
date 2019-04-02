lclass Obstacles {
    constructor (x,y,width,height,speed){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      this.speed = speed
  
    }
    draw(){
      fill(20,200,20);
      rect(this.x, this.y, this.width, this.height);
    }
    update(){
      this.x += this.speed
    }
  }
  Ausblenden
  
  
  
  
 
  let frame = 0
  let obstacleArray = []
  
  
  
  var player = new Player();
  
  
  let width = 400;
  let obstaclesSquares = []
  function setup() {
      createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
  }
  
  function draw() {
      frame++
      background(45, 154, 154);
      line(0, 366, 1000, 366);
      player.show();
      obstacleArray.forEach(el => el.draw())
      obstacleArray.forEach(el => el.update())
  
  
      if (frame % 50 == 0) {
      createObstacle() // add a new obstacle
      
    }
  
  }
  
  function createObstacle() {
      // X , Y , W , H , SPEED 
    let obstaclevar = new Obstacles(1000,326,40,40,-2)
    obstacleArray.push(obstaclevar)
  }

