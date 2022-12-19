import React , {useState,useEffect} from "react"
import Navcard from "./Navcard";
import "../css/Navmenu.css";
function Navmenu({ redmiPhones,miPhones,tv,laptop,home,audio,accessories}){
     let [miPhonesToggle,setmiPhones]=useState(false);
     let [redmiPhonesToggle,setRedmiPhones]=useState(false);
     let [tvToggle,setTv]=useState(false);
     let [laptopToggle,setLaptop]=useState(false);
     let [homeToggle,setHome]=useState(false);
     let [audioToggle,setAudio]=useState(false);
     let [accessoriesToggle,setAccessories]=useState(false);

     useEffect(() => {

      
        if(window.location.pathname==="/xioamiphones"){
            return setmiPhones(true)
            
        }
        if(window.location.pathname==="/redmiphones"){
            return setRedmiPhones(true)
            
        }
        if(window.location.pathname==="/tv"){
            return setTv(true)
            
        }
        if(window.location.pathname==="/tablets"){
            return setLaptop(true)
            
        }
        if(window.location.pathname==="/home"){
            return setHome(true)
            
        }
        if(window.location.pathname==="/audio"){
            return setAudio(true)
            
        }
        if(window.location.pathname==="/accessories"){
            return setAccessories(true)
            
        }

       },[])
    return(
       <div className="toggle">
        {
            miPhonesToggle ?  miPhones.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            redmiPhonesToggle ? redmiPhones.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            tvToggle ?  tv.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            laptopToggle ?  laptop.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            homeToggle ?  home.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            audioToggle ? audio.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
        {
            accessoriesToggle ?  accessories.map((item,index)=>(
                <Navcard  index={index} name={item.name} price={item.price} image={item.image}/>
            )):null
        }
       </div>
    )
}
export default Navmenu