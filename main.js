let me = document.querySelector(".me");
let letters = me.querySelectorAll(".letter");

letters.forEach(letter => {
  letter.addEventListener("mouseenter", () => {
    let index = Array.from(letters).indexOf(letter);
    for (let i = index - 1; i <= index + 1; i++) {
      if (letters[i]) {
        letters[i].style.color = "green";
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
});
