document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".documentation_card-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.parentNode.classList.contains("open")) {
        e.target.parentNode.classList.remove("open");
        gsap.to(
          e.target.parentNode.querySelector(".documentation_card-window"),
          {
            height: 0,
            duration: 1,
          }
        );
      } else {
        e.target.parentNode.classList.add("open");
        gsap.to(
          e.target.parentNode.querySelector(".documentation_card-window"),
          {
            height: "auto",
            duration: 1,
          }
        );
      }
    });
  });
  // gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
});
