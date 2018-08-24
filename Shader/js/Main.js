
var vert =
  'attribute vec3 position;' +
  'void main(void){' +
  ' gl_Position = vec4(position, 1.0);' +
  '}';

var flag =
  'void main(void){' +
  ' gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);' +
  '}';

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  orb = createShader(vert, flag);
  shader(orb);
}

function draw() {

  noStroke();

  // scale(windowWidth, windowHeight);
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
}
