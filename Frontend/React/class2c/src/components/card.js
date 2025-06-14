import "./card.css";
function Card({myimg,myname,myabout,changeimg,changename,changeabout}){
    return (
        <div className="card-container">
            <img className="image" src={myimg} alt="img"/>
            <h1 className="name">{myname}</h1>
            <p>{myabout}</p>
            <button onClick={()=>{
                changename("Sui")
            }}>change name</button>
        </div>
    )
}
export default Card;