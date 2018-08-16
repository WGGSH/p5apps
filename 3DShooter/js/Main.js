var game;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

  window.addEventListener('touchmove', function (event) {
    event.preventDefault();
  });

  game = new Game();
}

function draw() {
  background(0);

  game.update();
  game.draw();
  // push();
  // rotateX(mouseY * 0.01);
  // rotateY(mouseX * 0.01);
  // box(100, 100, 100);

  // pop();
}
