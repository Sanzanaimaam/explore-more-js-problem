
function checkDuplicate(name){
    let unique=[];
    for(let i=0; i<name.length; i++){
        const elements=name[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }

    }
    return unique

}
const names=['abul', 'babul','kabul','babul','chabul','habul','kabul'];
const pass=checkDuplicate(names);
console.log(pass)