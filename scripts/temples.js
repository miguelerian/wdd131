// Footer date info
const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.textContent = navigation.classList.contains("show") ? "✖" : "☰";
});
