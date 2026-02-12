document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
