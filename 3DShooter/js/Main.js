function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

  window.addEventListener('touchmove', function (event) {
    event.preventDefault();
  });

}

function draw() {
  background(0);
}
