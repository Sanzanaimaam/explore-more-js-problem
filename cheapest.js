const phones=[
    {name:'samsung', price:80000, color:'black'},
    {name:'iphone', price:100000, color:'golden'},
    {name:'oppo', price:30000, color:'blue'},
    {name:'oneplus', price:44000, color:'red'}
];
function checkCheapest(phones){
    let cheapest=phones[0];
    for(let i=0; i<phones.length; i++){
        const phone=phones[i];
        if(phone.price < cheapest.price){
            cheapest=phone;
         }
    }
    return cheapest

}
const allPhone=checkCheapest(phones)
console.log(allPhone);