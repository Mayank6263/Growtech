arr = [1,2,4,3];
////I)sum of array using for loop
// var sum = 0;
// for(i in arr){
//     sum += arr[i];
// }
// console.log(sum);

//II) REDUCE
// console.log(arr.reduce((acc,it)=>{
//     acc += it; 
//     return acc;}
// ,0))

//SHALLOW COPY I.E indirectly it will be deep but we say shallow
// const user ={
//     userid:"c2115",
//     name:"abc",
//     address:{
//         village:"katani",
//     pincode:"123123"
//     },
//     emp:"full time"}
//     const user2 = user;//I
//     user2.name="xyz";
//     console.log(user);
//     console.log(user2);
//     user2.address.pincode="234556";
//     console.log(user);
//     console.log(user2);
//     //II
//     const a = {...user}
//     //III
//     const user2 = Object.assign({},user);
    
    


