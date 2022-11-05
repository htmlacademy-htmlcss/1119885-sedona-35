var search = document.querySelector(".search-button");
var modal = document.querySelector(".modal");
var scrollbar = document.querySelector("body");
var closer = document.querySelector(".modal-close-button");
var minus1 = document.querySelector(".minus-button-first");
var plus1 = document.querySelector(".plus-button-first");
var minus2 = document.querySelector(".minus-button-second");
var plus2 = document.querySelector(".plus-button-second");
var adult = document.querySelector("#adult");
var adult = document.querySelector("#child");

search.removeAttribute("href");

search.onclick = function() {
  modal.classList.remove("modal-close");
  scrollbar.classList.add("modal-open");
}

closer.onclick = function() {
  modal.classList.add("modal-close");
  scrollbar.classList.remove("modal-open");
}

minus1.onclick = function() {
  adult.value -= 1;
}

plus1.onclick = function() {
  adult.value -= -1;
}

minus2.onclick = function() {
  adult.value -= 1;
}

plus2.onclick = function() {
  adult.value -= -1;
}
