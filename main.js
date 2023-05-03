let me = document.querySelector(".me");
let letters = me.querySelectorAll(".letter");

letters.forEach(letter => {
  letter.addEventListener("mouseenter", () => {
    let index = Array.from(letters).indexOf(letter);
    for (let i = index - 1; i <= index + 1; i++) {
      if (letters[i]) {
        letters[i].style.color = "orange";
        letters[i].style.transition = "color 0.5s";
      }
    }
  });
  letter.addEventListener("mouseleave", () => {
    let index = Array.from(letters).indexOf(letter);
    for (let i = index - 1; i <= index + 1; i++) {
      if (letters[i]) {
        letters[i].style.color = "initial";
        letters[i].style.transition = "color 0.5s";
      }
    }
  });
})

//a function that sorts an array of integers in a descending order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
  fe
}




