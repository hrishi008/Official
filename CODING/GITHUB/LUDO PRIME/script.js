let dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

function rollDice() {
  /*Math.floor(Math.random() * (max - min + 1)) + min*/
  dice.dataset.side = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  /* Add a class of "roll" to #dice after it's clicked, so that the transform properties come to life: */
  dice.classList.toggle("roll");
}
