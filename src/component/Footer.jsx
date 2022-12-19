import "../css/footer.css"

function Footer({footer}){
    return(
        <div className="footerMain">
           <div className="footersub">
          <p>SUPPORT</p>
       {footer.support.map((item,index)=>( 
            <a href="/">{item.name}</a>    
        )  
        )}
        </div>
        <div className="footersub">
        <p>SHOP AND LEarn</p>
        {footer.shopAndLearn.map((item,index)=>(
            <a href="/">{item.name}</a>
            
        ))}
        </div>
        <div className="footersub">
        <p>RETAIL STORE</p>
        {footer.retailStore.map((item,index)=>(
        <a href="/">{item.name}</a>
        )
        
        )}
        </div> 
        <div className="footersub">
        <p>ABOUT US</p>
        {footer.aboutUS.map((item,index)=>(      
            <a href="/">{item.name}</a>
         )
       
        )}
        </div> 
        <div className="footersub">
        <p>CONTACT US</p>
        {footer.contactUs.map((item,index)=>(
            <a href="/">{item.name}</a>
        )
        )}
        </div> 
        </div>
    )
}
export default Footer