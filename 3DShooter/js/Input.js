class Input{
  constructor() {
    this._pressCount = 0; // マウスをクリックし続けたフレーム数
    this._releaseCount = 0; // マウスを離し続けたフレーム数
    this._point = new Vector(); // 現在のマウス座標
    this._prePoint = new Vector(); // 1フレーム前のマウス座標
    this._pressedPoint = new Vector(); // 最後にクリックした時のマウス座標

    this._isClicked = false;
    this._isReleased = false;
    this._isPress = false;
  }

  update() {
    this._prePoint.set(this._point.x, this._point.y, this._point.z);
    if (mouseIsPressed) {
      this._pressCount++;
      this._releaseCount = 0;
      this._point.set(mouseX, mouseY, 0);
    } else {
      this._pressCount = 0;
      this._releaseCount++;
    }

    this._isClicked = this._pressCount == 1;
    this._isReleased = this._releaseCount == 1;
    this._isPress = this._pressCount >= 1;

    if (this._isClicked) {
      this._pressedPoint.set(mouseX, mouseY, 0);
      this._prePoint.set(this._point.x, this._point.y, 0);
    }


  }

  isClicked() {
    return this._isClicked;
  }

  isReleased() {
    return this._isReleased;
  }

  isPress() {
    return this._isPress;
  }

  getPoint() {
    return new Vector(this._point.x, this._point.y, 0);
  }

  getPressedPoint() {
    return new Vector(this._pressedPoint.x, this._pressedPoint.y, 0);
  }

  getPrePoint() {
    return new Vector(this._prePoint.x, this._prePoint.y, 0);
  }
}
