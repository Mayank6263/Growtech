var input = prompt("enter any armstrong number");
var temp = parseInt(input);
var digit = 0;
let data = parseInt(input);

while(temp > 0){
    digit++;
    temp = Math.floor(temp/10);
}
console.log(`power is ${digit}`);
var divident = 0;

var rem = 0;
var sum = 0;
while(data > 0){
    rem = data%10;
    sum += rem**digit;
    data = Math.floor(data/10);
}



if(sum == input){
    console.log(`the ${input} is ARMSTRONG`);
}
else{
    console.log(`the ${input} is not ARMSTRONG`);
    
}
