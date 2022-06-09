const botChoices = ["pierre", "feuille", "ciseaux"];
const playBtn = document.querySelector("#playBtn");
const botChoice = document.querySelector("#botChoices");
const userChoices = document.querySelectorAll("#userChoices div");
const resultats = document.querySelector("#resultats");
let userChoice = "";
let result = "";
playBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let counter = 5;
  let interval = setInterval(() => {
    if (counter < 1) {
      clearInterval(interval);
    }
    botChoice.textContent = counter;
    counter--;
  }, 1000);

  setTimeout(() => {
    botChoice.textContent = botChoices[random];
    if (botChoices[random] == userChoice) {
      result = "equality";
    } else if (
      (botChoices[random] == "pierre" && userChoice.id == "ciseaux") ||
      (botChoices[random] == "ciseaux" && userChoice.id == "feuille") ||
      (botChoices[random] == "feuille" && userChoice.id == "pierre")
    ) {
      result = "lose";
    } else if (
      (userChoice.id == "pierre" && botChoices[random] == "ciseaux") ||
      (userChoice.id == "ciseaux" && botChoices[random] == "feuille") ||
      (userChoice.id == "feuille" && botChoices[random] == "pierre")
    ) {
      result = "win";
    }
    resultats.textContent = result;
    userChoice.style.transform = "scale(1)";
  }, 6000);
});

for (const choice of userChoices) {
  choice.addEventListener("click", () => {
    userChoice = choice;
    userChoice.style.transform = "scale(1.1) translateY(50px)";
    console.log(userChoice);
  });
}
