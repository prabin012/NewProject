import './mbl.css'
import { CgAddR, CgHome, CgBell, CgPlayButtonR, CgMoreO } from "react-icons/cg";
import { Link } from 'react-router-dom'

import Mblnav from '../mblnav/Mblnav';
const Mobile = () => {
  return (
    <div>
      <Mblnav/>
    <div className="mobileHome">
        
    <Link to="/">
        <div className="mhome">
            <CgHome/>
            <p>Home</p>
        </div>
        </Link>
        <div className="mhome">
            <CgPlayButtonR/>
            <p>video</p>
        </div>
        <Link to="/createProduct">
        <div className="mhome">
            <CgAddR/>
            <p>post</p>
        </div>
        </Link>
        <div className="mhome">
            <CgBell/>
            <p>notification</p>
        </div>
        <div className="mhome">
            <CgMoreO />
            <p>messege</p>
        </div>
    </div>
    </div>
  )
}

export default Mobile
