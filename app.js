const navBarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

// window is listening to scroll until a certain stage//
window.addEventListener("scroll", () => {
  //if scroll Y is greater than bottom container (class in the index.html) minus the offsetTop of the navbar and the margin of 50px  (check in style.css) itself than add the active class at navbar else remove//
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navBarEl.offsetHeight - 50
  ) {
    navBarEl.classList.add("active");
  } else {
    navBarEl.classList.remove("active");
  }
});
