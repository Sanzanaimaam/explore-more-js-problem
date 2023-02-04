const phones=[
    {name:'samsung', price:2200, quantity:3},
    {name:'iphone',  price:1100, quantity:1},
    {name:'oppo', price:3200, quantity:2},
    {name:'oneplus', price:2500, quantity:4}
];
function checkSum(phones){
    let sum=0;
    for(let i=0; i<phones.length; i++){
        const phone=phones[i];
        const totalCost=phone.price*phone.quantity;
        sum=sum+totalCost;
    }
    return sum

}
const allPhone=checkSum(phones)
console.log(allPhone);