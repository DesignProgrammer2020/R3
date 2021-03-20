let randomIndex;
let animating = false;
let birds = [];
let img;
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 15; i++) {
    birds[i] = loadImage(`assets/birds_$ {i}.JPG`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200, 220, 240);
  textSize(24);
  imageMode(CENTER);
  frameRate(12);
  text("Click me", 50, 575);
  console.log(birds);
}

function draw() {
  if (animating == true) {
    clear();
    image(birds[0], width * 0.5, height * 0.5);
    if (imageCounter < trolls.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer(){
  animating = false;
  if(birds[0]) {
    background(200, 220, 240);
    clear();
    randomIndex = int(random(birds.length));
    text(birds[randomIndex].name, 300, 300);
    birds.splice(randomIndex, 1);
  }else{
    background();
    text("That's all!", 200, 200)
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
