const breadstickPrice = 7.99;

document.getElementById("add_to_bag_button").addEventListener("click", function() {
    // get dipping sauce
    let dippingSauce = document.getElementById("dipping-sauce").value;

    // get quantity
    let quantity = document.getElementById("quantity").value;
    
    let price = breadstickPrice;
    price = price.toFixed(2);

    // add to bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    for (let i = 0; i < quantity; i++) {
        bag.push({
            name: "Breadsticks with " + dippingSauce + (dippingSauce !== "no-sauce" ? " dipping sauce" : ""),
            price: price,
        });
    }
    localStorage.setItem("bag", JSON.stringify(bag));

    alert("Breadsticks added to bag! Price: $" + price + (quantity > 1 ? " each" : "") + ".");

    // redirect to order page
    window.location.href = "order.html";
});
