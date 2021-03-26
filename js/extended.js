const animal = {
  cat: function () {
    const randomNum = Math.floor(Math.random() * 4);
    let sound = "";
    switch (randomNum) {
      case 0:
        sound = "Meow!";
        break;
      case 1:
        sound = "Hisssssss!";
        break;
      case 2:
        sound = "Purrr...";
        break;
      case 3:
        sound = "Umm wanna see my claws?";
        break;

      default:
        "Meh...";
        break;
    }

    return `<p> ${sound}</p> `;
  },
  dog: function () {
    const randomNum = Math.floor(Math.random() * 4);
    let sound = "";
    switch (randomNum) {
      case 0:
        sound = "Woof!";
        break;
      case 1:
        sound = "Hoooooowl!";
        break;
      case 2:
        sound = "Gurrr...";
        break;
      case 3:
        sound = "Umm wanna play?";
        break;

      default:
        "Meh...";
        break;
    }
    return `<p> ${sound}</p> `;
  },
};

const body = document.querySelector("body");
body.innerHTML += `
<div class="kitty-container">
    <h5>You wanna pet me???</h5>
    <img class="kitty-img" src="images/cat.svg"/>
    <p><p>
    <button>I prefer dogs</button>
</div>`;

const kittyImg = document.querySelector(".kitty-img");
const complaint = document.querySelector(".kitty-container p");
const kittyContainer = document.querySelector(".kitty-container");

let makeNoise = () => {
  let imageClass = kittyImg.classList.value;
  if (imageClass === "kitty-img") {
    complaint.innerHTML = animal.cat();
  } else {
    complaint.innerHTML = animal.dog();
  }
};

kittyImg.onclick = makeNoise;

const dogButton = document.querySelector("button");

let giveDog = () => {
  if (dogButton.innerHTML === "I prefer dogs") {
    kittyImg.src = "images/puppy.svg";
    kittyImg.classList.remove("kitty-img");
    kittyImg.classList.add("puppy-img");
    kittyContainer.style.backgroundColor = "#000000";
    kittyContainer.style.color = "#FFFFFF";
    dogButton.innerHTML = "Let me see that cat again";
  } else {
    kittyImg.src = "images/cat.svg";
    kittyImg.classList.add("kitty-img");
    kittyImg.classList.remove("puppy-img");
    kittyContainer.style.backgroundColor = "#FFFFFF";
    kittyContainer.style.color = "#000000";
    dogButton.innerHTML = "I prefer dogs";
  }
};

dogButton.onclick = giveDog;
