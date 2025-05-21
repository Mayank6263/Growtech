var input = prompt("Enter Marks :- ");
let num = parseInt(input);
if(isNaN(num)){
    console.log('Enter valid Number');
}
else if(num%2 !== 0){
    console.log('ODD');
}
else if(num % 2 === 0){
    console.log('EVEN');
    
}