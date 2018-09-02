class PlayerCamera{
  constructor() {
    this._angleX = 0;
    this._angleY = 0;
    this.range = 400.0;
    this._cameraDirection = new Vector();


    ambientLight(100);
    directionalLight(120, 120, 120, -1, -1, 1);
    ambientMaterial(230, 210, 255, 255);
  }

  update() {

    // this._angleX = mouseX * 0.01;
    // this._angleY = mouseY * 0.01;
    if (input.isPress()) {
      let mousePos = input.getPoint();
      let preMousePos = input.getPrePoint();
      this._angleX += (mousePos.x - preMousePos.x) * 0.006;
      this._angleY += (mousePos.y - preMousePos.y) * 0.006;
      if (this._angleY < -Math.PI / 2) {
        this._angleY = -Math.PI / 2;
      }
      if (this._angleY > Math.PI / 2) {
        this._angleY = Math.PI / 2;
      }

      console.log(this._angleX,this._angleY);
    }

    this._cameraDirection = new Vector(
      this.range * Math.cos(this._angleX) * Math.cos(this._angleY),
      this.range * Math.sin(this._angleY),
      this.range * Math.sin(this._angleX) * Math.cos(this._angleY)
    );
    // camera(0, 0, 0, this._cameraDirection.x, this._cameraDirection.y, this._cameraDirection.z, 0, 1, 0);
    camera(this._cameraDirection.x, this._cameraDirection.y, this._cameraDirection.z, 0, 0, 0, 0, 1, 0);
    // camera(cameraDirection.x, cameraDirection.y, cameraDirection.z, 0, 0, 0, 0, 1, 0);
    // console.log(cameraDirection);
  }

  cameraDirection() {
    return this._cameraDirection.getValue();
  }

  getAngleX() {
    return this._angleX;
  }

  getAngleY() {
    return this._angleY;
  }

}
