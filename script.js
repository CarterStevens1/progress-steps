const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//ups the active class and makes sure it doesnt go above the length of circles
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update(); // runs the function
});
//lowers the active class and makes sure it doesnt go below the length of 1
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update(); //runs the function
});

//adds and removes the active class
function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  //fills the bar with blue up to the correct amounts
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //allow the buttons to be clicked if active is not 1 or 4
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
