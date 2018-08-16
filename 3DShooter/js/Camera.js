class PlayerCamera{
  constructor() {
    this._angleX = 0;
    this._angleY = 0;
    this.range = 500.0;


    ambientLight(100);
    directionalLight(120, 120, 120, -1, -1, 1);
    ambientMaterial(230, 210, 255, 255);
  }

  update() {

    this._angleX = mouseX * 0.01;
    this._angleY = mouseY * 0.01;

    let cameraDirection = new Vector(
      this.range * Math.cos(this._angleX) * Math.cos(this._angleY),
      this.range * Math.sin(this._angleY),
      this.range * Math.sin(this._angleX) * Math.cos(this._angleY)
    );
    // camera(0, 100, 0, cameraDirection.x, cameraDirection.y, cameraDirection.z, 0, 1, 0);
    camera(cameraDirection.x, cameraDirection.y, cameraDirection.z, 0, 0, 0, 0, 1, 0);
    // console.log(cameraDirection);
  }

  
}
