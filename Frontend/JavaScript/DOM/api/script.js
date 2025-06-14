const container = document.getElementById("container")
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>response.json())
.then((user)=>{
    const card = document.createElement("div");
    card.className ="card"
    card.innerHTML = `
    <h1>User Details</h1>
    <h1>Name:${user.name}</h1>
    <h1>Name:${user.id}</h1>
    <h1>Name:${user.address.city}</h1>
    <h1>Name:${user.address.zipcode}</h1>
    `
    container.appendChild(card)
})