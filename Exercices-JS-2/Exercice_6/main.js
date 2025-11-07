const bodyContainer = document.querySelector("body");
const images = bodyContainer.querySelectorAll("img");

images.forEach(function (img, index) {
  const originalSrc = img.src;

  img.addEventListener("mouseenter", function () {
    img.src = `images/image${index + 1}_2.jpg`;
  });

  img.addEventListener("mouseleave", function () {
    img.src = originalSrc;
  });
});
