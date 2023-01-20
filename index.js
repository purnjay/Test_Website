

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".products");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-20.8%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translateX(-41.5%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('four')){
        slides.style.transform = 'translateX(-62.3%)';
        e.target.classList.add('active');
    } else if (e.target.classList.contains('five')){
        slides.style.transform = 'translateX(-83%)';
        e.target.classList.add('active');
    }
  }
});
