//API RELATED
// console.log('synchoro')
// function setTimeout(()=> { console.log('settimeout');},"2000");

//PROMISE 
// const mypro = new Promise((res,rej)=>{
//     // res("resolved");
//     rej("rejected");
// })
// mypro.then((res)=>
//     console.log(res)
// )
// mypro.catch((rej)=>
//     console.log(rej)
// )

//FETCH
let result = fetch("https://jsonplaceholder.typicode.com/users")
// console.log((fetch('url')));
result.then((data) => console.log(data));

