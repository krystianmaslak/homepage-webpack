import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

console.log('HELLO 🚀')

console.log(moment().startOf('day').fromNow());

const calfculate = (myNumber) => myNumber * 7;
console.log(calfculate(7));



  const heading = document.querySelector(".main__heading--js");

  heading.innerHTML = moment().format("MMM Do YY");         





 const hamburger = document.querySelector('.hamburger--js'); 

 hamburger.addEventListener('click', () => { 
     const nav = document.querySelector('.navigation--js'); 
     nav.classList.toggle('navigation--open'); 

 });