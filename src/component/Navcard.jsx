

function Navcard({image,name,price}){
    return(
          <div className="Navtoggle">
            <img src={image} alt=""/>
            <h6>{name}</h6>
            <p>{price}</p>
          </div>
    )  
}
export default Navcard