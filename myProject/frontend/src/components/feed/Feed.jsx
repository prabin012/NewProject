import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import SideMiddle from '../sideMiddle/SideMiddle';
import Home from '../../Home/Home';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Mblnav from '../mblnav/Mblnav';
import Eventss from '../eventSlider/Eventss';
import MainHeader from '../mainHeader/MainHeader';
import Sideleft from '../sideLeft/Sideleft';
import Sideright from '../sideRight/Sideright';
import Videos from './Videos';

const Feed = () => {
  const [posts, setPost] = useState([]);
  const {user} = useContext(AuthContext);
useEffect(()=>{
  const fetctData = async()=>{
    const res = await axios.get("/timeline/" + user._id);
    setPost(res.data)
  }
 fetctData();
},[user._id]);
  return (
    <div>
       <div className="add">
        <marquee class="GeneratedMarquee" direction="left" scrollamount="20" behavior="scroll">
            "Greetings from ProjectMela : Unveiling the World of new project ideas and enovation......"
        </marquee>
    </div>
      <div className="hp1">
            <Header/>
            </div>
            <div className="hp6">
            <Navbar/>
            </div>
           <div className="hp2">
           <Mblnav/>
           </div>
           <div className="hp3">
           <Eventss/>
           </div>
           <div className="hp4">
           <MainHeader/>
           </div>
           <div className="sidePart">
      <div className="lside">
      <Sideleft/>
      </div>
      <div className="mside">
          <Videos/>
       </div>
      <div className="rside">
          <Sideright />
        
      </div>
    </div>
    </div>
  )
}

export default Feed
