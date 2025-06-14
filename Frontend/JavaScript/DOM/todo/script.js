
const mybutton = document.getElementById("button");
// console.log(mybutton);

const myinp = document.getElementById("items")
const inp = document.getElementById("input");
// const data = inp.
// console.log(inp)

mybutton.addEventListener("click",()=>{
   const  myp = document.createElement("p")
//    const data = inp.value;
    myp.textContent = inp.value
    myinp.appendChild(myp);
    
    // console.log(data)

    //created remove button
    const remove = document.createElement("button")
    remove.setAttribute("class","remove")
    remove.textContent = "X"
    myinp.appendChild(remove)

    //created updated button
    const update = document.createElement("button")
    update.setAttribute("class","update")
    update.textContent = "Update"
    myinp.appendChild(update)
    inp.value = ""
    //remove functionality
    remove.addEventListener("click",()=>{
        myinp.removeChild(remove)
        myinp.removeChild(update)
        myinp.removeChild(myp) 
    })
    
    //update functionality
    update.addEventListener("click",()=>{        
        // console.log(myinp.textContent)
        const save = document.createElement("button")
        
        save.innerText = "Save"
        myinp.prepend(save)
        save.setAttribute("class","save")
        myinp.removeChild(update)
        inp.value = myp.innerText;
        console.log("all set before save button")
        save.addEventListener("click",()=>{
            myp.innerText = inp.value;
            console.log("entered insave")
            myinp.appendChild(myp)
            // const update = document.createElement("button")
            myinp.prepend(update)
            myinp.removeChild(save)
            inp.value = ""
        })
    })
});
