
//this refers to object whose function is executing
//this referes to window object
//in normal function this points to that object
// console.log(this);
// const obj ={
//     fname:"mayank",
//     lname:"solanki",
//     fun : function(){
//         console.log(this.fname);
//         console.log(this)
//     },
// };
// obj.fun();

//---------------------------------------------X----------------------------

//  ARROW FUNCTION :- this will show undefined 
// const obj1 ={
//     fname:"mayank",
//     lname:"solanki",
//     fun : ()=>{
//         console.log(this.fname);
//         console.log(this)
//     },
// };
// obj1.fun();
// console.log(obj1.this);
//---------------------------------------------X----------------------------

// function namo(){
//     console.log(this);   
// }
// namo();
// this refers to window object
//so we use new keyword

//---------------------------------------------X----------------------------

//document.queryselector("p") p.addEventlisterner("click",()={ console.log(this)})
// this this points to that tag

//---------------------------------------------X----------------------------

//In class if we use object and then we calls this .  then this refers to that class . 

//---------------------------------------------X----------------------------

// const user= {
//     id:33,
//     fname:"mayuank",
//     fun1:function (){
//         console.log('inside fun1');
        
//         function nested(){
//             console.log('inside nested');
            
//             console.log(this);
            
//         }
//         nested();
//     }
// }
// user.fun1();
// user.fun1().nested();

//when we try to call this it will refers to global object


const show = (id)=>{
    console.log('this ',this.id);
    
}
// show(300);
show.call({id:400})