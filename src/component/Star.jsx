import "../css/Star.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import "../index.css";

function Star({starProduct}){
    return(
        <div className=" container-fluid star">
        <div className="row g-0">
      
           
                 
                    <div className="col-lg-6 col-md-8 col-sm-12 m-auto product ">
                    <a href={starProduct[0].url}><img src={starProduct[0].image} alt=""/></a>
                    </div>
                    <div className="col-lg-6 col-md-8  col-sm-12 m-auto product">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 d-flex">
                        <a href={starProduct[1].url} ><img src={starProduct[1].image} alt=""/></a>
                    
                        <a href={starProduct[2].url} ><img src={starProduct[2].image} alt=""/></a>
                        </div>
                       
                        <div className="col-lg-12 col-md-12 d-flex">
                        <a href={starProduct[3].url} ><img src={starProduct[3].image} alt=""/></a>
                        </div>

                    </div>
                  
               
                    
                   
                    </div>
                    
             
                    </div>   
     
        </div>
    )
}
export default Star;