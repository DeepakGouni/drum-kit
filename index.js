var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.textContent;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  if (event.target.tagName.toLowerCase() === "input") {
    return;
  }
  makeSound(event.key);
  buttonAnimation(event.key);
});

const sequence_player = (sequence) => {
  let seq = "";
  sequence ? (seq = sequence) : (seq = "lkjkslkkjlwakdjksl");
  for (let i = 0; i < seq.length; i++) {
    setTimeout(() => {
      makeSound(seq[i]);
      buttonAnimation(seq[i]);
    }, i * 350);
  }
};

document.querySelector(".seq").addEventListener("click", () => {
  sequence_player("");
});

let sequence = "";
document.querySelector(".text").addEventListener("change", (e) => {
  sequence += e.target.value;
});
document.querySelector(".cstm-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (sequence === "") {
    return;
  }
  sequence_player(sequence);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton?.classList?.add("pressed");

  setTimeout(function () {
    activeButton?.classList?.remove("pressed");
  }, 100);
}
