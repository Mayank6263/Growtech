// console.log("im10june");

const mydiv = document.getElementById("divid");
// console.log(mydiv)
// console.log(mydiv.attributes);
// console.log(mydiv.setAttribute("class","changedclass"))

console.log(" above namenode")
for(let i=0;i<NamedNodeMap.length; i++){
    console.log(mydiv.attribute([i]))
};
console.log(" below namenode" , mydiv.attributes)
mydiv.style.backgroundColor = "blue";
mydiv.setAttribute("style","color:aliceblue")
