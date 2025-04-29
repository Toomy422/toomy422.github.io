const drinkPrices = {
    "small": 5.99,
    "medium": 7.49,
    "large": 9.49,
}

document.getElementById("add_to_bag_button").addEventListener("click", function() {
    // get size
    let size = document.getElementById("size").value;
    
    // get salad type
    let saladType = document.getElementById("salad-type").value;

    // get quantity
    let quantity = document.getElementById("quantity").value;
    
    let price = drinkPrices[size];
    price = price.toFixed(2);

    // add to bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    for (let i = 0; i < quantity; i++) {
        bag.push({
            name: size + " " + saladType + " salad",
            price: price,
        });
    }
    localStorage.setItem("bag", JSON.stringify(bag));

    alert((quantity > 1 ? "Salads" : "Salad") +
        " added to bag! Price: $" + price + (quantity > 1 ? " each" : "") + ".");

    // redirect to order page
    window.location.href = "order.html";
});
