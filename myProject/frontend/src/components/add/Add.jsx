
import axios from "axios";
import './add.css'
import Sideleft from '../sideLeft/Sideleft'
import SideMiddle from '../sideMiddle/SideMiddle'
import Sideright from '../sideRight/Sideright'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Navbar from "../navbar/Navbar";

const Add = () => {
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

   
    <div div className="addname">
   
    <div className="sidePart">
      <div className="lside">
      <Sideleft/>
      </div>
      <div className="mside">
          {posts.map((p) =>(
            <SideMiddle key={p._id} post={p} />
          ))}
       </div>
      <div className="rside">
        
          <Sideright />
        
      </div>
    </div>
    </div>
  )
}

export default Add
