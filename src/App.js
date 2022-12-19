import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Nav from "./component/Nav";
import data from "./data/data.json"
import Navbar from "./component/Navbar";
import Banner from "./component/banner.jsx";
import Offers from "./component/Offer";
import Heading from "./component/Heading";
import Star from "./component/Star";
import Hotaccess from "./component/Hotaccess"
import Hotmenu from "./component/Hotmenu";
import Product from "./component/Product";
import Video from "./component/Video";
import Banners from "./component/Banners";
import Social from "./component/Social";
import Footer from "./component/Footer";
import Navmenu from "./component/Navmenu";



function App() {
  console.log(data.footer)
  
  console.log(data.hotAccessories.music)
  return (
   
   <Router>
        <Nav/>
         
        <Navbar/>
        <Navmenu redmiPhones={data.redmiPhones} miPhones={data.miPhones} tv={data.tv} laptop={data.laptop} home={data.home} audio={data.audio} accessories={data.accessories}/>
        <Banner start={data.banner.start}/>
        <Offers Offer={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <Star starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <Hotmenu/>
        <Routes>
       
          <Route exact path="/music" element={<Hotaccess  music={data.hotAccessories.music}  musicCover={data.hotAccessoriesCover.music}/>}></Route>
          <Route exact path="/smartDevice" element={<Hotaccess smartDevice={data.hotAccessories.smartDevice}  smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}></Route>
          <Route exact path="/home" element={<Hotaccess  home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}></Route>
          <Route exact path="/lifeStyle" element={<Hotaccess  lifeStyle={data.hotAccessories.lifeStyle}  lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
          <Route exact path="/mobileAccessories" element={<Hotaccess mobileAccessories={data.hotAccessories.mobileAccessories}  mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>
        </Routes>
        <Heading text="PRODUCT REVIEW"/>
        <Product products={data.productReviews}/>
        <Heading text="VIDEOS"/>
        <Video videos={data.videos}/>
        <Heading text="IN THE PRESS"/>
        <Banners  end={data.banner.end}/>
        <Social/>
        <Footer footer={data.footer}/>
     </Router>  
      
  
  );
}
            
export default App;
