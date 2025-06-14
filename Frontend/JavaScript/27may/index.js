//FREEZE
// let obj ={
//     name:"mayank",
//     id:23
// }
// obj.name="Mayank Solanki"
// console.log(obj);
// Object.freeze(obj);
// obj.name="Mayank Solanki afterf freeze"
// console.log(obj)

//SEAL
// let obj = {
//   name: "mayank",
//   id: 23,
// };
// obj.name = "Mayank Solanki";
// console.log(obj);
// Object.seal(obj);
// obj.name = "Mayank Solanki afterf freeze";
// delete obj.id; //delete will not work here .
// console.log(obj);

// REST OPERATOR
// function rest(a, b, ...c) {
//     console.log('This is all inside rest');
    
//   c.forEach( i => {
//     console.log(i);
    
//   });
//   console.log('This is except rest');
  
//   console.log(a + b);
// }
// rest(2, 3, 5, 7, 4, 6, 4);


//Shallow Deep 
const obj1={
    id:101,
    name:"Mayank",
    data:{
        info:"DRF",
        salary:"...."
    },
    date:"27/05/25",
}
const obj2= obj1;
obj1.id = 103;
console.log(obj1,obj2)

