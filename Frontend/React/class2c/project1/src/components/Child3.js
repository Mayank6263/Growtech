function Child3({m3,chngmoney}){
    return (
        <div>
            <p style={{color:'red'}} >{m3} child3</p>
            <button onClick={(()=>{
                chngmoney("33")
            })} >Change {m3}</button>
        </div>
    )
}
export default Child3 ;