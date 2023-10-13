
import { useContext, useEffect, useState } from 'react';
import Sideleft from '../sideLeft/Sideleft';
import SideMiddle from '../sideMiddle/SideMiddle';
import Sideright from '../sideRight/Sideright';
import './mainHeader.css'
import axios from "axios";

import { NavLink} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Feed from '../feed/Feed';

const MainHeader = () => {

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
    <>
    <div className="mainHeader">
    <span className="mainHeaderSearch">
            <input type="text" className="searchPost" placeholder="Search"   />
           
        </span>
     
        <NavLink to='/' className="feeds p22"><span >Feeds </span></NavLink>
       
        <NavLink to='/publication' className="publication p22"><span >Publication </span></NavLink>
        
       
        <NavLink to='/newFeed'className="video p22"> <span >Videos </span></NavLink>

        <NavLink to="/createProduct" className="createPost">
      <span className="createPost-1 p22">+ Create Post </span>
      </NavLink>
        
        {/* <span className="mainHeaderCountry">Country</span> */}
    </div>
   
   
    </>
  )
}

export default MainHeader
