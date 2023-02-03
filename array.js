const country='Bangladesh';
const age=78;
const student={id:20, name:'sanzana' ,class:11};
const friends=[2,33,55,66,88]
const newFriends=['a', 'v','k', 't']
console.log(typeof country)
console.log(typeof age)
console.log(typeof student)
console.log(Array.isArray(friends))
const friendsList=newFriends.concat(friends);
console.log(friendsList);
console.log(friends.includes(90))