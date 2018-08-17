var game;
var input;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

  window.addEventListener('touchmove', function (event) {
    event.preventDefault();
  });

  game = new Game();
  input = new Input();
}

function draw() {
  background(0);
  input.update();

  game.update();
  game.draw();
  // push();
  // rotateX(mouseY * 0.01);
  // rotateY(mouseX * 0.01);
  // box(100, 100, 100);

  // pop();
}
