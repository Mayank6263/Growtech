// document.getElementsByTagName(div);
// document.getElementsByClass()
// const a = document.querySelector("p")
// console.log(a);
// const b = document.querySelectorAll("p")
// console.log(b)
// const idtag = document.getElementById("p2");
// const clstag1 = document.getElementsByClassName("p1");
// console.log('class :- ', clstag1);
// console.log('id :- ', idtag);


// const t = document.querySelector("p");
// console.log("queryselector :- " , t);

//queryselectorall returns nodelist
//classname and tagname both returns html collection
// GETELEMENTSBYCLASSNAME
//it gives arraylike object ie nodelist
//it gives all the eleemnts/tags which have that class

//GETELEMENT BY ID
//it retruns single element 

// const ev = document.getElementsByTagName("window");
// console.log(ev);
// window.addEventListener("scroll",()=>{
//     console.log("I am scrolling")
// })

const a = document.querySelector("div");
console.log("innerhtml",a.innerHTML)
console.log("innertext",a.innerText)
console.log("text content",a.textContent)



