// ベクトルクラス
class Vector {
  // コンストラクタ
  constructor(_x, _y, _z) {
    if (arguments.length == 3) {
      this.x = _x;
      this.y = _y;
      this.z = _z;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
  }

  // 加算
  add(_vec) {
    this.x += _vec.x;
    this.y += _vec.y;
    this.z += _vec.z;
    return this;
  }

  // 減算
  sub(_vec) {
    this.x -= _vec.x;
    this.y -= _vec.y;
    this.z -= _vec.z;
    return this;
  }

  // 乗算(引数は実数)
  mult(_value) {
    this.x *= _value;
    this.y *= _value;
    this.z *= _value;
    return this;
  }

  // 除算(引数は実数)
  div(_scale) {
    if (_scale === 0) return this;
    this.x /= _scale;
    this.y /= _scale;
    this.z /= _scale;
    return this;
  }

  // 長さの2乗を取得
  lengthSquare() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  // 長さを取得
  length() {
    return Math.sqrt(this.lengthSquare());
  }

  // 正規化ベクトルを取得
  normalized() {
    let vec = new Vector(this.x, this.y, this.z);
    vec.div(vec.length());
    return vec;
  }

  // 正規化
  normalize() {
    this.div(this.length());
    return this;
  }

  // 内積
  dot(_vec) {
    return this.x * _vec.x + this.y * _vec.y + this.z + _vec.z;
  }

  // A === B
  // 3要素が全て同一の場合true
  eq(_vec) {
    return this.x == _vec.x && this.y == _vec.y && this.z == _vec.z;
  }

  // A != B
  ne(_vec) {
    return !this.eq(_vec);
  }

  // A < B
  // Aの長さがBより短い場合，true
  lt(_vec) {
    return this.lengthSquare() < _vec.lengthSquare();
  }

  // A <= B
  le(_vec) {
    return this.lengthSquare() <= _vec.lengthSquare();
  }

  // A > B
  gt(_vec) {
    return !this.le(_vec);
  }

  // A >= B
  ge(_vec) {
    return !this.lt(_vec);
  }

  // ゲッター
  getValue() {
    return new Vector(this.x,this.y,this.z);
  }

  // // セッター
  set(_x, _y, _z) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  // コンソールに出力
  print() {
    console.log(this.x, this.y, this.z);
  }
}
// ゼロベクトル
Vector.zero = function () { return new Vector() };
