var orders = [];
function someOrders(item1, price1) {
    var stuff = {item: item1, price:price1};
        console.log("Item: " + stuff.item + ", price: " + stuff.price);
        orders.push(stuff);
        return orders;
}
someOrders("bagel","$1");
someOrders("WhatsApp","$19 Billion");
someOrders("Lexus","$45,000");

console.log(orders);
