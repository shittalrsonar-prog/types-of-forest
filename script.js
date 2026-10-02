document.addEventListener("DOMContentLoaded", function () {
    console.log("FOREST WEBSITE JAVASCRIPT WORKING!");

    const cards = document.querySelectorAll(".forest-card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.toggle("selected");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
