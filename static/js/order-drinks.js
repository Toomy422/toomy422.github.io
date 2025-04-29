const drinkPrices = {
    "22oz": 1.49,
    "1L": 1.99,
    "2L": 2.49,
}

document.getElementById("add_to_bag_button").addEventListener("click", function() {
    // get size
    let size = document.getElementById("size").value;
    
    // get drink type
    let drinkType = document.getElementById("drink-type").value;

    // get quantity
    let quantity = document.getElementById("quantity").value;
    
    let price = drinkPrices[size];
    price = price.toFixed(2);

    // add to bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    for (let i = 0; i < quantity; i++) {
        bag.push({
            name: size + " " + drinkType,
            price: price,
        });
    }
    localStorage.setItem("bag", JSON.stringify(bag));

    alert((quantity > 1 ? "Drinks" : "Drink") + " added to bag! Price: $" + price + (quantity > 1 ? " each" : "") + ".");

    // redirect to order page
    window.location.href = "order.html";
});
