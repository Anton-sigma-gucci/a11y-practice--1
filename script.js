const alert = document.querySelector(".alert");
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", function () {
    alert.style.display = "none";
});