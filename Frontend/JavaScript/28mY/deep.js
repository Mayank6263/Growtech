// const cooler1 ={
//     name:"blu",
//     id:"231cd",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//     height:3.5
// };
// const cooler2 = cooler1;
// cooler2.id = "5555";
// cooler2.functionality.color = "green";

// console.log("original ",cooler1);
// console.log("duplicate ",cooler2);
// nested and upper level both changing of refrences


//SHALLOW COPY BY SPREAD
// const cooler1 ={
//     name:"blu",
//     id:"231cd",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//     height:3.5
// };
// const cooler2 = {...cooler1};
// cooler2.name = "Ram";
// cooler2.functionality.kaam = "garmi";
// //it will only change nested level not outer level
// console.log("original ",cooler1);
// console.log("duplicate ",cooler2);



//IT WILL CHANGE IN BOTH LIKE NORMAL ASIGNING
// const cooler1 ={
//     name:"blu",
//     id:"231cd",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//     height:3.5
// };
// const cooler2 = Object.assign({},cooler1);
// cooler2.name = "Ram";
// cooler2.functionality.kaam = "garmi";
// //it will only change nested level not outer level
// console.log("original ",cooler1);
// console.log("duplicate ",cooler2);
// let a = [3,0,5,9,2];
// let ab = a.map((it)=>{
//     if(it%2 !== 0){
//         return it*2;
//     }
// })
// let cd = a.filter((it)=>{
//     if(it%2 !== 0){
//         return it*2;
//     }
// })
// console.log(ab);
// console.log(cd);

