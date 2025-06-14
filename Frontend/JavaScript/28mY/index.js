console.log('Deep vs Shallow');

// const cooler ={
//     name:"blu",
//     id:"231cd",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//     height:3.5
// };
// //Shallow copy Types to make shallow copy
// // const dub = cooler;
// // const dub = Object.assign({},cooler);
// // const dub = {...cooler};//it will change only in nested level not in outer level
// // cooler.name="white";
// dub.name="white";
// console.log(cooler);


//DEEP COPY 
const cooler1 ={
    name:"blu",
    id:"231cd",
    functionality:{
        kaam:"cooling",
        color:"white"
    },
    height:3.5
};
//WAYS OF DEEP COPY
const dub1 = JSON.parse(JSON.stringify(cooler1));
dub1.name= "red";
console.log('original',cooler1);
console.log('original',dub1);
dub1.functionality.kaam= "garm";

console.log('original',cooler1);
console.log('original',dub1);