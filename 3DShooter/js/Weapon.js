class Weapon extends GameObject{
  constructor() {
    super();

    this._angleX = random(0, 3.14);
    this._angleY = random(0, 3.14);
    this._angleZ = random(0, 3.14);

    this.textureImage = game.getResource().bulletImage;
  }

  isRemove() {
    return this._position.lengthSquare() > 100000;
  }

  draw() {
    push();
    translate(this._position.x, this._position.y, this._position.z)
    rotateY(-game.getPlayerCamera().getAngleX()+1.57);
    rotateX(-game.getPlayerCamera().getAngleY());
    // noFill();
    // stroke(255);
    fill(255);
    stroke(255);
    strokeWeight(0.3);
    // box(15);
    texture(this.textureImage);
    // rect(-10, -10, 10, 10);
    plane(10);

    strokeWeight(1);

    // console.log(this._position);

    pop();
  }
}
