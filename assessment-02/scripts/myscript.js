
function orderTotal(){
    // Sandwiches
    let meatball = parseFloat(document.getElementById("meatball").value * 4.00);
    let vegan = parseFloat(document.getElementById("vegan").value * 3.00);
    let philly = parseFloat(document.getElementById("philly").value * 7.25);
    let flatbread = parseFloat(document.getElementById("flatbread").value * 4.50);
    let hamcheese = parseFloat(document.getElementById("hamcheese").value * 3.25);
    let sandwichTotal = meatball + vegan + philly + flatbread + hamcheese;

    // drinks 
    let water = parseFloat(document.getElementById("water").value * 1.00);
    let coke = parseFloat(document.getElementById("coke").value * 2.50);
    let sprite = parseFloat(document.getElementById("sprite").value * 2.50);
    let lemonade = parseFloat(document.getElementById("lemonade").value * 1.75);
    let pepper = parseFloat(document.getElementById("pepper").value * 2.50);
    let drinkTotal = water + coke + sprite + lemonade + pepper;

    // desserts
    let cake = parseFloat(document.getElementById("cake").value * 3.00);
    let pie = parseFloat(document.getElementById("pie").value * 2.50);
    let icecream = parseFloat(document.getElementById("icecream").value * 2.00);
    let muffin = parseFloat(document.getElementById("muffin").value * 2.25);
    let cookie = parseFloat(document.getElementById("cookie").value * 1.25);
    let dessertTotal = cake + pie + icecream + muffin + cookie;

    let totalOrder = sandwichTotal + drinkTotal + dessertTotal;

    document.getElementById("sandwich-check").innerHTML = "Sandwiches: $" + sandwichTotal;
    document.getElementById("drink-check").innerHTML = "Drinks: $" + drinkTotal;
    document.getElementById("dessert-check").innerHTML = "Dessert: $" + dessertTotal;
    document.getElementById("total").innerHTML = "Total: $" + totalOrder;

}