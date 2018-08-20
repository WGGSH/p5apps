class Game{
  constructor() {
    this._playerCamera = new PlayerCamera();
    this._gameobjects = new Array();
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

    // 武器の発射
    if (input.isClicked()) {
      let weapon = new Weapon();
      weapon.setPosition(this._playerCamera.cameraDirection().normalized().mult(55));
      weapon.setVelocity(this._playerCamera.cameraDirection().normalized());
      weapon.setAccel(this._playerCamera.cameraDirection().normalized());
      this._gameobjects.push(weapon);
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
    box(150, 150, 150);
    pop();

    noFill();
    sphere(2000,24,24);

    pop();
  }
}
