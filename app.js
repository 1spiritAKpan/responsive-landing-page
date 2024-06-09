document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Simulate a loading delay
  setTimeout(function () {
    preloader.style.display = "none";
    content.classList.add("show-content");
  }, 00); 
});
