var input = prompt("Enter any perfect number");
var perfect = parseInt(input);
var sum=0;
for(var i=1; i<perfect; i++){
    if(perfect%i===0){
        sum += i;
    }
}
console.log(sum === perfect ? "perfect" : "not perfect" );
