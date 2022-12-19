import "../css/prod.css"

function Product({products}){
    return(
       <div className="prodreview">
          {
            products.map((item,index)=>{
               return( 
                 <div className="prod">
                <img src={item.image} alt=""/>
                <h6>{item.review}</h6>
                <p>{item.name} <span>{item.price}</span></p>
                </div>
               )

            })
          }
       </div>
    )
}
export default Product