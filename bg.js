const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const date1 = new Date();
  const Bghours = date1.getHours();
  if(18>Bghours>8){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  }
  else {
  const image = new Image();
  image.src = `images/${imgNumber + 4}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  }
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();