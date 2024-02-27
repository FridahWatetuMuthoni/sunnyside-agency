const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", handleToggle);

function handleToggle() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  //menu.style.display = menu.style.display === "none" ? "flex" : "none";
}
