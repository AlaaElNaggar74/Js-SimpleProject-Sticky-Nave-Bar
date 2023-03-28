let navv = document.getElementById("navv");
let land = document.getElementById("land");
let textt = document.getElementById("textt");

console.log(navv.offsetHeight);
console.log(land.offsetHeight);
console.log(textt.offsetTop);

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= textt.offsetTop - navv.offsetHeight - 15) {
    navv.classList.add("act");
  } else {
    navv.classList.remove("act");
  }
  console.log(navv);
});
