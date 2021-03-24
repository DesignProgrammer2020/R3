    //images of plastics
    imageCounter %= plastics.length;
    image(plastics[imageCounter], width / 2, height / 2);
    if (imageCounter < plastics.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (animals[0]) {

    clear();
    randomIndexAnimals = int(random(animals.length));
    randomIndexPlastics = int(random(plastics.length));

    image(plastics[randomIndexPlastics], width * 0.5, height * 0.5);
    fill(random(80, 200), random(100, 220), random(80, 200));
    text(`The ${animals[randomIndexAnimals].name} dislikes this.`, width * 0.15, height * 0.82);

    animals.splice(randomIndexAnimals, 1);

  } else {
    background(80, 180, 80);
    textSize(48);
    fill(0);
    text("Don't litter!", width * 0.25, height * 0.5);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
