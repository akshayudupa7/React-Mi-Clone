
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import "../css/banner.css"

import Carousel from "react-bootstrap/Carousel"  

function Banner({start}){
    return(
     <div class="banner">

     <Carousel>
      {
        start.map((item,index)=>(
             <Carousel.Item>
              <img src={item}
              key={index}
                alt="jj"/>
                </Carousel.Item>
        ))}
      
      </Carousel>
     </div>
    )

}
export default Banner