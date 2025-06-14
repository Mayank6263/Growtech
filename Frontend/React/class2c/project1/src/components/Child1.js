import Child2 from "./Child2";
function Child1({mymoney,chngmoney}){
    return(
        <Child2 m2={mymoney} chngmoney={chngmoney}/>
    )
}
export default Child1;