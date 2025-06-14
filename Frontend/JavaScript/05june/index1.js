// a = [1,2,3];
// b = [1,2,3];
// c = { name: "a" };
// d = { name: "a" };
// console.log(a==b);//false
// console.log(c == d);//false
// console.log(a===b);//false
// console.log(c === d);//false



// const URL= "https://jsonplaceholder.typicode.com/users"
// const ans = fetch(URL);
// let arr = []
// const data = ans.then((op)=>{op.json().then(opt)=>{console.log(opt);
// }}).catch((e)=>{console.log("eror",e);
// });
// console.log('array',arr);

const URL = "https://jsonplaceholder.typicode.com/users";
// const ans = fetch(url);
// let arr = []
// const data = ans.then((op) => {
//     op.json().then((opd) => {
//         console.log("my data", opd);
//         arr.push(opd)
//     });
// });
// console.log("Mere array me data", arr);
// console.log(arr.length);


async function callapi(URL){
    const res = await fetch(URL);
    const result = await res.json();
    console.log("result is",result);
    console.log(res);
}
callapi(URL);