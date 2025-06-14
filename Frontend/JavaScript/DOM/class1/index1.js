// // console.log(object)
// const div1 = document.getElementById("dvid");
// console.log(div1);
// const btn = document.getElementById("btn");
// // console.log(btn)
// const nw = document.createElement("p");
// // console.log(nw);
// nw.textContent = "textcontent";
// // div1.appendChild(nw);
// newbtn = document.createElement("button");
// newbtn.textContent = "Remove";
// div1.addEventListener("click", () => {
//   // const nw = document.createElement("p");
//   // // console.log(nw)
//   // nw.textContent = "textcontent";
//   div1.append(nw);

//   div1.append(newbtn);
//   // console.log(newbtn)
// });
// // div1.prepend("p");

// // newbtn.addEventListener("click", () => {
// //   div1.remove(newbtn);
// // });

// const mydiv = document.querySelector("div");
// const btn = document.getElementById("btn");
// console.log("btn", btn);
// console.log("div access", mydiv);

// btn.addEventListener("click", () => {
//   const newP = document.createElement("p");
//   newP.textContent = "this is a para";
//   mydiv.appendChild(newP);
//   const removeBtn = document.createElement("button");
//   removeBtn.textContent = "remove element";
//   mydiv.appendChild(removeBtn);

//   removeBtn.addEventListener("click", () => {
//     mydiv.removeChild(newP);
//     mydiv.removeChild(removeBtn);
//   });
// });

const mydiv = document.querySelector("div")
const btn = document.getElementById("btn")
console.log(mydiv)
console.log(btn)
btn.addEventListener("click",()=>{
    //created para and button on clicking
    const newp = document.createElement("p")
    newp.textContent = "this is para"
    mydiv.appendChild(newp)
    const newbtn = document.createElement("button")
    newbtn.textContent = "Remove"
    mydiv.appendChild(newbtn)

    //remove para and button
    newbtn.addEventListener("click",()=>{
        mydiv.removeChild(newbtn)
        mydiv.removeChild(newp)
    })

    // created a update button
    const upd = document.createElement("button")
    upd.textContent = "Update"
    mydiv.appendChild(upd);

    //replaced textcontent
    upd.addEventListener("click",()=>{
        newp.textContent = "changed para"
        mydiv.appendChild(upd)
    })
})
