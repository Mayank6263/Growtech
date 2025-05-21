var input = prompt("Enter number :- ");
let num = parseInt(input);
let fact=1;
for(let i=num; i>0; i--){
   fact *= i;
}
console.log(`the factorial of ${input} is ${fact}`);
