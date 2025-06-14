
// //should not do it .against the rules.
// // try{
// //     function addTwonum(a,b){
// //         return a+b;
// //     }
// //     console.log(addTwonum(2,43));//45
// //     console.log(addTwonum(2,undefined));//2
// //     console.log(addTwonum(2,null));//nan
// //     console.log(addTwonum(2,NaN));//nan
    
    
// //     //throw("message");
// // }
// // catch(e){console.log('message is :-',e);
// // }


// //

//     function addTwonum(a,b){
//         try{
//             if(typeof(a)==="number" && typeof(b) === "number"){
//         return a+b;
//             }
//             throw("a and b are not numbers")
//         }
//         catch(e){console.log('message is :-',e)}
//         finally{ return a+b;}
//     }
//     // console.log(addTwonum(2,43));//45
//     console.log(addTwonum(2,undefined));//2
//     // console.log(addTwonum(2,null));//nan
//     // console.log(addTwonum(2,NaN));//nan
    
    
//     //throw("message");

function ex(){
    console.log('mayank');
    return 5
}
const i = ex();


function outer() {
    let count = 0;
    function inner() {
      count++;
      console.log(count);
    }
    return inner;
  }
  
  const counter = outer(); 
  counter(); // 1
  counter(); // 2
  

