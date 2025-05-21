var input = prompt("Enter Marks :- ");
let marks = parseInt(input);
if(marks<33){
    console.log('Student is Fail');
}
else if(marks>=33 & marks <75){
    console.log("Student is pass");
}
else if(marks>=75 & marks <90){
    console.log("Congratulations . You got first division");
}
else if( marks >=90 & marks <= 100){
    console.log("Congratulations . You are in merit");
}
else{
    console.log('Please. Enter Digits');
    
}