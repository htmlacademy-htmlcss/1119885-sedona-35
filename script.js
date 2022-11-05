var search = document.querySelector(".search-button");
var modal = document.querySelector(".modal");
var scrollbar = document.querySelector("body");
var closer = document.querySelector(".modal-close-button");

search.removeAttribute("href");

search.onclick = function() {
  modal.classList.remove("modal-close");
  scrollbar.classList.add("modal-open");
}

closer.onclick = function() {
  modal.classList.add("modal-close");
  scrollbar.classList.remove("modal-open");
}
