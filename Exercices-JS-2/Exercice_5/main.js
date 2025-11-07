const imgContainer = document.querySelector(".container");
const images = imgContainer.querySelectorAll("img");

images.forEach(function (img, index) {
  img.addEventListener("mouseenter", function () {
    img.src = `images/image${index + 1}_2.jpg`;
  });
});
