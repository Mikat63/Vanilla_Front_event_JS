const razBtn = document.querySelector("#raz_btn");
const lastName = document.querySelector("#lastname");
const firstName = document.querySelector("#firstname");
const city = document.querySelector("#city");

razBtn.addEventListener("click", function () {
  lastName.value = "";
  firstName.value = "";
  city.value = "";
});
