// async function print() {
//     return "hello async fun";
// }
// let ans = print();
// console.log(ans);
// let inp = "";
// const ans1 = ans.then((res)=>{
//     console.log(res);
//     return inp +res;
// });
// console.log(ans1);

// function outer() {
//     function inner() {
//       console.log(x);
//     }
//     const x = 10;
//     return inner;
//   }
//   const result = outer();
//   result();

// for(var i=0; i<=3; i++){
//     console.log('for loop i = ',i);
//     setTimeout(() => {
//         console.log('settimeout i =', i)
//     });
// }
// console.log("out of for ",i);

// function getValue(id) {
//   const show = () => {
//     console.log("this ", this.id);
//   };
//   show();
// }
// // show(300);
// getValue.call({ id: 400 });

const getValue = (id) => {
  console.log("  id ", id);
  console.log("this is", this.id);
  console.log("this is", this);
  const show = () => {
    console.log("this ", this);
    console.log("this ", this.id);
  };
  show();
};

getValue.call({ id: 400 });
