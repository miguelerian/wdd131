document.addEventListener("DOMContentLoaded", () => {

    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
        reviewCount = 0;
    }

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    document.getElementById("reviewCount").textContent = reviewCount;
});
