import Hotcard from "./Hotcard"
import "../css/Hot.css"

function Hotaccess({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}){
    return(
          <div className="mainHot">
          <div className="hot0">
          
            <img src={musicCover||smartDeviceCover||homeCover||lifeStyleCover||mobileAccessoriesCover} alt=""/>
          </div>
            <div className="hot1">
            {
                music && music.map((item,index)=>(
                 <Hotcard image={item.image} price={item.price} name={item.name} index={index}/>
                ))
              
            }
            {
                smartDevice && smartDevice.map((item,index)=>(
                 <Hotcard image={item.image} price={item.price} name={item.name} index={index}/>
                ))
              
            }
            {
                home && home.map((item,index)=>(
                 <Hotcard image={item.image} price={item.price} name={item.name} index={index}/>
                ))
              
            }
          
            {
                lifeStyle && lifeStyle.map((item,index)=>(
                 <Hotcard image={item.image} price={item.price} name={item.name} index={index}/>
                ))
              
            }
            {
               mobileAccessories && mobileAccessories.map((item,index)=>(
                 <Hotcard image={item.image} price={item.price} name={item.name} index={index}/>
                ))
              
            }
            </div>
          </div>
    )
}
export default Hotaccess