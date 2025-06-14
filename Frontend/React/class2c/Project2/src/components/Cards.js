import "./card.css";
function Card({mydata}){
    return(
        <div className="cards">
            <div className="card">
                <img src={mydata?.Img} alt="Image" />
                <h2>{mydata?.filename}</h2>
                <h4>{mydata?.date}</h4>
                <p>{mydata?.size}</p>
            </div>
        </div>
    )
}
export default Card;