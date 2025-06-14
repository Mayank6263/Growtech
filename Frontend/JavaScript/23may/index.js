//Reverse array
// let arr = [4,3,2,1];
// // let temp = 0;
// let l = 0;
// let r = arr.length-1;
// while(l<r){
//     let temp = arr[l]
//     arr[l] = arr[r]
//     arr[r] = temp
//     // [arr[l],arr[r]] = [arr[r],arr[l]];
    
//     l++;
//     r--;
// }
// console.log(arr);

//Bubble sort
// let arr = [7,3,5,6,0,-1];
// let n = arr.length;
// // let l = 0;
// // let r = n-1;
// for(var i=0; i<=n-1; i++){
//     for(var j=i+1; j<=n-1; j++){
//         if(arr[i]>=arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

//duplicate in array

// let arr = [-2,0,4,-2,0,1];



//Compound Intrest 
let principal = parseInt(prompt("enter principal amount :-"));
let rate = parseInt(prompt("enter principal rate :-"));
let year = parseInt(prompt("enter principal year :-"));
let compound = parseInt(prompt("enter compunded years :-"));

let intrest = 0 ;
let c_intrest = 0;

function Ci(){
    intrest = (principal*rate*year)/100 ;
    amount = principal*(1+rate/100)**(compound*year);
    c_intrest = amount - principal
    console.log(amount);
    
    console.log(c_intrest);
    
    
}
Ci();