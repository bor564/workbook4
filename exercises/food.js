//declare an arraay of objects representing items and their prices
let lunch = [
            {item: "steak", price: 9.95},
            {item:"chips",price:5.35},
            {item:"coca-cola",price: 2.78}
];
//calculate subtotal
function calculateSubTotal(items) {
    let subTotal= 0;
    for (let i = 0; i < items.length; i++) {
        subTotal += items[i].price;
        
    }
    return subTotal;
    
}
//calculate the subtotal, tax, tip and total due
const subTotal = calculateSubTotal(lunch);
