const image1 = document.querySelector("#image1");

image1.addEventListener("mouseenter", function () {
  image1.src = "images/image1_2.jpg";
});

image1.addEventListener("mouseleave", function () {
  image1.src = "images/image1.jpg";
});
