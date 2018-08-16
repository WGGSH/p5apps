class Game{
  constructor() {
    this._playerCamera = new PlayerCamera();
  }

  update() {
    this._playerCamera.update();
  }

  draw() {
    push();
    // fill(255);
    noFill();
    stroke(255, 0, 0);
    line(0, 0, 0, 1000, 0, 0);
    stroke(0, 255, 0);
    line(0, 0, 0, 0, 1000, 0);
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, 1000);
    stroke(255);
    
    push();
    translate(500, 0, 0);
    rotateX(frameCount*0.01);
    box(50, 50, 50);
    pop();

    pop();
  }
}
