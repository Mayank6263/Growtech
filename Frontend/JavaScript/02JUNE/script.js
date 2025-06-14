function getsum(a, b, c) {
  return a + b + c;
}
console.log(getsum(2, 4, 5));

function one(x) {
  console.log("firstval ", x);
  return (
    x +
    function one(y) {
      console.log("second ", y);

      return (
        y +
        function one(z) {
          console.log("third ", z);
          return z;
        }
      );
    }
  );
}
console.log(one(2)(2)(2));

// function getsum(x){
//     return function(y){
//       return function(z){
//             return x+y+z;
//         }
//     }
// }
// console.log(getsum(2)(2)(2));
