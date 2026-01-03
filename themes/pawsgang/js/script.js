// 1. Select the correct element from your HTML
const myCarouselElement = document.querySelector("#carouselExampleDark");

// 2. Pass that specific element variable into the Carousel constructor
if (myCarouselElement) {
  let carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false
  });
}
