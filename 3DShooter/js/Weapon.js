class Weapon extends GameObject{
  constructor() {
    super();

    this._angleX = random(0, 3.14);
    this._angleY = random(0, 3.14);
    this._angleZ = random(0, 3.14);
  }

  isRemove() {
    return this._count >= 30;
  }

  draw() {
    push();
    translate(this._position.x, this._position.y, this._position.z)
    rotateX(this._angleX);
    rotateY(this._angleY);
    rotateZ(this._angleZ);
    noFill();
    stroke(255);
    strokeWeight(0.3);
    box(15);
    strokeWeight(1);

    console.log(this._position);

    pop();
  }
}
