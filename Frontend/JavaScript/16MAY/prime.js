var input = prompt("Enter number :- ");
let num = parseInt(input);
let count=0;
for(var i=1; i<=num; i++){
    if(num%i === 0){
        count++;
    }
}

console.log(count===2 ?"prime":"not aprime");