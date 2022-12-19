

function Hotcard({image,price,index,name}){
    return(
        <div className="hot3">
            <img src={image} alt={index}/>
            <h5>{name}</h5>
            <p>{price}</p>
        </div>
    )
}
export default Hotcard