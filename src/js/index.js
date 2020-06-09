import "../scss/main.scss";
import moment from "moment";

/* place your code below */

console.log("HELLO 🚀");

console.log(moment().startOf("day").fromNow());

const time = moment().format("MMM Do YY");
const heading = document.querySelector(".time--js");
heading.innerHTML = time;



const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
