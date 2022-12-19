import Carousel from "react-bootstrap/Carousel";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import '../css/banners.css';

function Banners({end}){
    console.log(end)
    return(
        <div className="banners">
       <Carousel>
        
       {
            end.map((item,index)=>(
            
                <Carousel.Item>
            
               <img src={item.image}
                     index={index}
                    alt=""/>
                  <Carousel.Caption>
                    <h2>{item.name}</h2>     
                    <p>{item.description}</p>
                    <span>{item.source}</span>
                </Carousel.Caption> 
                </Carousel.Item>
      

                     

            ))
       }
       </Carousel>
       </div>
    )
}
export default Banners