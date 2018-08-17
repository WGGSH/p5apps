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

    // 軸の描画
    // noFill();
    // stroke(255, 0, 0);
    // line(0, 0, 0, 1000, 0, 0);
    // stroke(0, 255, 0);
    // line(0, 0, 0, 0, 1000, 0);
    // stroke(0, 0, 255);
    // line(0, 0, 0, 0, 0, 1000);

    push();
    noFill();
    stroke(255);
    translate(500, 0, 0);
    rotateX(frameCount*0.01);
    box(150, 150, 150);
    pop();

    noFill();
    sphere(2000,24,24);

    pop();
  }
}
