const pizzaPrices = {
    "small": 9.99,
    "medium": 12.49,
    "large": 13.99,
}

const toppingPrices = {
    "extra-cheese": 0.75,
    "tofu": 1.00,
    "pineapple": 0.75,
    "olive": 0.75,
    "bell-pepper": 1.00,
    "banana-pepper": 1.00,
    "broccoli": 1.00,
    "mushroom": 0.75,
    "tomatoes": 0.75,
    "red-pepper": 0.0,
    "garlic": 0.0,
}

document.getElementById("add_to_bag_button").addEventListener("click", function() {
    // get size
    let size = document.getElementById("size").value;
    
    // get toppings
    let toppings = new Array();
    document.querySelectorAll('input[name="toppings"]:checked').forEach(function(checkbox) {
        toppings.push(checkbox.value);
    });
    
    // get sauce
    let sauce = document.getElementById("sauce").value;
    
    // get quantity
    let quantity = document.getElementById("quantity").value;
    
    let price = 0;
    price += pizzaPrices[size];
    for (let topping of toppings) {
        price += toppingPrices[topping];
    }
    price = price.toFixed(2);

    // add to bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    for (let i = 0; i < quantity; i++) {
        bag.push({
            name: size + " pizza" + (toppings.length > 0 ? " with " + toppings.join(", ") : "") + " and " + sauce + (sauce !== "no-sauce" ? " sauce" : ""),
            price: price,
        });
    }
    localStorage.setItem("bag", JSON.stringify(bag));

    alert((quantity > 1 ? "Pizzas" : "Pizza") +
        " added to bag! Price: $" + price + (quantity > 1 ? " each" : "") + ".");

    // redirect to order page
    window.location.href = "order.html";
});
