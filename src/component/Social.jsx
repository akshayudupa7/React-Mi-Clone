import "../css/Social.css"

function Social(){
    return(
        <div className="social">
     
        <div className="subsocial">
            <div className="stay">
               <h6>LETS Contact each other</h6>
               <p>Any sales updated  from mi we can proviode </p>
            </div>
            <div className="email">
               <input type="email" placeholder="ENTER EMAIL ADDRESS"/>
            </div>
        </div> 
        <div className='mainsocial'>   
            <div className="stay">
            <h6> MI </h6>
                <p>Come to Mi store</p>
            </div>
            <div className="media">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
       </div>
    )
}
export default Social