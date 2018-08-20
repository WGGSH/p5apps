class GameObject {
  constructor() {
    this._position = new Vector();
    this._velocity = new Vector();
    this._accel = new Vector();
    this._direction = new Vector();
    this._range = 0;
    this._count = 0;
    this._angleX = 0;
    this._angleY = 0;
    this._angleZ = 0;
  }

  getPosition() {
    return this._position;
  }

  setPosition(_vec) {
    this._position = new Vector(_vec.x, _vec.y, _vec.z);
  }

  getVelocity() {
    return this._velocity;
  }

  setVelocity(_vec) {
    this._velocity = new Vector(_vec.x, _vec.y, _vec.z);
  }

  getAccel(){
    return this._accel;
  }

  setAccel(_vec) {
    this._accel = new Vector(_vec.x, _vec.y, _vec.z);
  }

  getDirection() {
    return this._direction;
  }

  setDirection(_vec) {
    this._direction = new Vector(_vec.x, _vec.y, _vec.z);
  }

  getRange() {
    return this._range;
  }

  setRange(_value) {
    this._range = _value;
  }

  getCount() {
    return this._count;
  }

  isRemove() {
    return false;
  }

  update() {
    this._count++;
    this._velocity.add(this._accel);
    this._position.add(this._velocity);
  }

  draw() {
    push();
    translate(this._position.x, this._position.y, this._position.z);
    pop();
  }

  isRemove() {
    return false;
  }
}
