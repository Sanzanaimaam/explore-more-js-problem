const phones=[
    {name:'samsung', price:80000, color:'black'},
    {name:'iphone', price:100000, color:'golden'},
    {name:'oppo', price:30000, color:'blue'},
    {name:'oneplus', price:44000, color:'red'}
];
function checkSum(phones){
    let sum=0;
    for(let i=0; i<phones.length; i++){
        const phone=phones[i];
        sum=sum+phone.price
    }
    return sum

}
const allPhone=checkSum(phones)
console.log(allPhone);