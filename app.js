const button = document.querySelectorAll(".box button");
const reset = document.querySelector(".reset");
const box = document.querySelector(".box");
const outer = document.querySelector(".outer");
let player = true;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (const btn of button) {
  btn.addEventListener("click", () => {
    if (player) {
      btn.innerText = "X";
      winner();
      player = false;
    } else {
      btn.innerText = "O";
      winner();
      player = true;
    }
    btn.disabled = true;
  });
}

function winner() {
  for (const element of winPattern) {
    let p1 = button[element[0]].innerText;
    let p2 = button[element[1]].innerText;
    let p3 = button[element[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        celebration();
      }
    }
  }
}
function celebration() {
  box.style.display = "none";
  reset.style.display = "none";

  const h2 = document.createElement("h2");
  outer.append(h2);
  h2.innerText = " You WON !!!";

  const playAgain = document.createElement("button");
  playAgain.innerText = "play again";
  playAgain.classList.add("reset");
  outer.append(playAgain);
  playAgain.addEventListener("click",()=>{
    location.reload();
  });

}
reset.addEventListener("click", () => {
  for (const element of button) {
    element.disabled= false;
    element.innerText = "";
  }
});









