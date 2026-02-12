document.addEventListener("DOMContentLoaded", () => {

    /* Greeting based on time */
    const greetingElement = document.querySelector("#greeting");

    if (greetingElement) {
        const hour = new Date().getHours();
        let message = "";

        if (hour < 12) {
            message = "Good Morning! Start Your Day with Tacos!";
        } else if (hour < 18) {
            message = "Good Afternoon! Ready for Lunch?";
        } else {
            message = "Good Evening! Enjoy Late Night Tacos!";
        }

        greetingElement.textContent = message;
    }


    /* Promotions section */
    const promotions = [
        { title: "Taco Tuesday", description: "Buy 9 tacos, get 1 free!" },
        { title: "Family Combo", description: "4 gringas + 4 drinks for $250 MXN" }
    ];

    const promoContainer = document.querySelector("#promotions");

    if (promoContainer) {
        let html = "";

        promotions.forEach(promo => {
            html += `
                <div class="card">
                    <h3>${promo.title}</h3>
                    <p>${promo.description}</p>
                </div>
            `;
        });

        promoContainer.innerHTML = html;
    }


    /* Menu items */
    const menuItems = [
        { name: "Taco al Pastor", price: 12 },
        { name: "Taco de Res", price: 14 },
        { name: "Taco Campechano", price: 14 },
        { name: "Taco de Bistek de Puerco", price: 12 },
        { name: "Taco de Salchichon", price: 14 },
        { name: "Quesadilla", price: 30 },
        { name: "Torta", price: 35 },
        { name: "Gringa", price: 40 },
        { name: "Taco de Pollo Asado", price: 20 },
        { name: "Refrescos", price: 25 },
        { name: "Botella Agua Natural", price: 20 }
    ];

    const menuContainer = document.querySelector("#menuContainer");

    if (menuContainer) {
        let html = "";

        menuItems.forEach(item => {
            html += `
                <div class="card">
                    <h3>${item.name}</h3>
                    <p>$${item.price} MXN</p>
                </div>
            `;
        });

        menuContainer.innerHTML = html;
    }


    /* Favorite taco (localStorage) */
    const favoriteSelect = document.querySelector("#favoriteSelect");
    const favoriteMessage = document.querySelector("#favoriteMessage");

    if (favoriteSelect && favoriteMessage) {

        const saved = localStorage.getItem("favoriteTaco");

        if (saved) {
            favoriteSelect.value = saved;
            favoriteMessage.textContent = `Your favorite taco is ${saved}!`;
        }

        favoriteSelect.addEventListener("change", () => {
            const selected = favoriteSelect.value;

            if (selected !== "") {
                localStorage.setItem("favoriteTaco", selected);
                favoriteMessage.textContent = `Your favorite taco is ${selected}!`;
            } else {
                favoriteMessage.textContent = "";
            }
        });
    }


    /* Contact form */
    const form = document.querySelector("#contactForm");
    const response = document.querySelector("#formResponse");

    if (form && response) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();

            if (name !== "") {
                localStorage.setItem("lastVisitor", name);
                response.textContent = `Thank you ${name}! Your message has been received.`;
                form.reset();
            }
        });
    }

});
