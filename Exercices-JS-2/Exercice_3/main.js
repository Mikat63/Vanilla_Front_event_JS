const inputName = document.querySelector("#input_name");

inputName.addEventListener("keydown", function () {
  console.log("hello");
  alert(inputName.value);
});
