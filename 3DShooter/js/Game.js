class Game{
  constructor() {

    this._playerCamera = new PlayerCamera();
    this._gameobjects = new Array();
    this._resource = new Resource();
    // blendMode(ADD);

  }

  update() {
    this._playerCamera.update();

    // GameObjectの更新
    let size = this._gameobjects.length;
    for (let i = size - 1; i >= 0; i --){
      this._gameobjects[i].update();
      if (this._gameobjects[i].isRemove()) {
        this._gameobjects.splice(i, 1);
      }
    }

    if (frameCount % 2 == 0) {
      let X = 6;
      let Y = 6;
      let angleBuf1 = 3.14 / X * 2;
      let angleBuf2 = 6.28 / Y;
      // let angleBuf3 = frameCount * frameCount / 60000;
      let angleBuf3 = (frameCount / 60);
      let angleBuf4 = (frameCount / 120)%0.3 - 0.15;
      let angle1, angle2;
      for (let i = 0; i < X; i++) {
        for (let j = 0; j < Y; j++) {
          let weapon = new Weapon();
          weapon.setPosition(new Vector(0, 0, 0));
          angle1 = angleBuf1 * i + angleBuf3 * (i > X / 3 ? 1 : -1);
          angle2 = angleBuf2 * j + angleBuf4;
          let vecX = 5.0 * Math.cos(angle1) * Math.cos(angle2);
          let vecY = 5.0 * Math.sin(angle2);
          let vecZ = 5.0 * Math.sin(angle1) * Math.cos(angle2);
          weapon.setVelocity(new Vector(vecX, vecY, vecZ));
          weapon.setAccel(new Vector(0, 0, 0));
          this._gameobjects.push(weapon);
        }
      }
    }
  }

  draw() {
    push();

    // GameObjectの描画
    for (let obj of this._gameobjects) {
      obj.draw();
    }

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
    // box(150, 150, 150);
    pop();

    noFill();
    // sphere(2000,24,24);

    pop();
  }

  getPlayerCamera() {
    return this._playerCamera;
  }

  getResource() {
    return this._resource;
  }
}
