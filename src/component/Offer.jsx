import React from "react";
import "../css/Offer.css"

/*import Offerss from "./Offerss"*/
/*<Offerss key={index} image={item.image} url={item.url}/>*/
function Offers({Offer}){
    return(
        <div className="offer">
        {
            
            Offer.map((item,index)=>(
                
                <div>
              <a href={item.url}><img src={item.image} index={index} alt=""/></a>
               </div>
            ))
        
        }
        </div>
    )
}
export default Offers;