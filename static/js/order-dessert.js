const dessertPrices = {
    "cheesecake": 4.99,
    "brownie": 3.49,
    "cookie": 2.49,
    "velvet-cake": 4.99,
    "chocolate-cake": 4.99,
    "cannoli": 3.49,
};
    

document.getElementById("add_to_bag_button").addEventListener("click", function() {
    // get dessert type
    let dessertType = document.getElementById("dessert-type").value;

    // get quantity
    let quantity = document.getElementById("quantity").value;
    
    let price = dessertPrices[dessertType];
    price = price.toFixed(2);

    // add to bag
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    for (let i = 0; i < quantity; i++) {
        bag.push({
            name: dessertType,
            price: price,
        });
    }
    localStorage.setItem("bag", JSON.stringify(bag));

    alert((quantity > 1 ? "Desserts" : "Dessert") +
        " added to bag! Price: $" + price + (quantity > 1 ? " each" : "") + ".");

    // redirect to order page
    window.location.href = "order.html";
});
