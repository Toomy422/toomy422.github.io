// differences between internal name and display name
// if an element is not in this list, it will be displayed as is
const nameChanges = {
    "extra-cheese": "Extra Cheese",
    "bell-pepper": "Bell Pepper",
    "red-pepper": "Roasted Red Pepper",
    "no-sauce": "No Sauce",
    "banana-pepper": "Banana Pepper",
    "honey-mustard": "Honey Mustard",
    "caesar": "Vegetarian Caesar",
    "diet-coke": "Diet Coke",
    "dr-pepper": "Dr. Pepper",
    "root-beer": "Root Beer",
    "velvet-cake": "Red Velvet Cake",
    "chocolate-cake": "Chocolate Cake",
    "bbq": "BBQ",
    "iced-tea": "Iced Tea",
};

document.addEventListener("DOMContentLoaded", function() {
    // Load bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];

    // Find the container
    let bagContainer = document.getElementById("bag-container");

    let totalPrice = 0;

    // Function to refresh the bag display
    function renderBag() {
        bagContainer.innerHTML = ""; // Clear previous content

        if (bag.length === 0) {
            bagContainer.innerHTML = "<p style='text-align: center;'>Your bag is empty.</p>";
            return;
        }

        bag.forEach((item, index) => {
            let displayName = item.name;
            // Apply name changes if applicable
            for (const [key, value] of Object.entries(nameChanges)) {
                displayName = displayName.replace(new RegExp(key, 'g'), value);
            }

            let div = document.createElement("div");
            div.classList.add("bag-item");
            div.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; border: 1px solid #ccc; padding: 10px; margin: 10px;">
                    <div>
                        <h5 style="margin: 0;" class="capitalize">${displayName}</h5>
                        <p style="margin: 0;">Price: $${Number(item.price).toFixed(2)}</p>
                    </div>
                    <button class="btn btn-primary btn-lg bag-remove-button" data-index="${index}" style="background-color: #2bed4b; border-color: #2bed4b;">X</button>
                </div>
            `;
            bagContainer.appendChild(div);

            totalPrice += Number(item.price);
        });

        let totalDiv = document.createElement("div");
        totalDiv.classList.add("total-price");
        totalDiv.innerHTML = `<h4 style="text-align: center;">Total Price: $${totalPrice.toFixed(2)}</h4>`;
        bagContainer.appendChild(totalDiv);

        // Add event listeners for the new remove buttons
        document.querySelectorAll(".bag-remove-button").forEach(button => {
            button.addEventListener("click", function() {
                const index = this.getAttribute("data-index");
                bag.splice(index, 1); // Remove the item
                localStorage.setItem("bag", JSON.stringify(bag)); // Save updated bag
                renderBag(); // Refresh the list
            });
        });
    }

    // Initial render
    renderBag();

    // Clear entire bag
    document.getElementById("clear-bag").addEventListener("click", function() {
        if (confirm("Are you sure you want to clear your bag?")) {
            localStorage.removeItem("bag");
            bag = [];
            renderBag(); // Re-render after clearing
        }
    });

    document.getElementById("checkout").addEventListener("click", function() {
        if (bag.length === 0) {
            alert("Your bag is empty. Please add items to your bag before checking out.");
            return;
        }
        // Show pop-up that order was successful
        alert("Order placed successfully! Thank you for your order.");
        window.location.href = "home.html";
    });
});
