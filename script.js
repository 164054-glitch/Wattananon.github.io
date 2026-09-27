document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".page-card img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoomed");
        });
    });
});
