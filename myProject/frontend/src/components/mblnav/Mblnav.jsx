import { useContext, useState } from 'react';
import './mblnav.css'
import {  CgMenuRightAlt} from "react-icons/cg";
import { AuthContext } from '../../context/AuthContext';

import Header from '../header/Header';
import { useNavigate } from 'react-router';




const Mblnav = () => {
  const history = useNavigate();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = useState(false);
  const [opennev, setOpennev] = useState(false);

  const LogOut = () => {
    localStorage.clear();
    history("/");
    window. location. reload()
}
  return (
    <>
      <div className="navbar-1">
        <div className="navbarItem">
          <span className="navbarHeader">The Techonlogy works Best When The People Connects</span>
          <span className="navbarInfo">Search  (20202..)</span>
          <div className="navbarSearch">
          <div className="personIcon messaheIcon" onClick={() => setOpen(!open)}>
              {/* <CgProfile/> */}
              <img src={user.profilePicture ?PF + user.profilePicture :PF + "assests/logo2.png"} alt="" />
              {open &&
                        <div className="logoutOpen">
                            <ul className="logoutItem">
                                <li>Profile</li>
                                <li onClick={LogOut}>Logout </li>
                                {/* <LogoutIcon/> */}

                            </ul>
                        </div>
                    }
            </div>
            <input type="text" className="navbarSearchfield" placeholder="Search" />
            <button className="navbarSearchButton">Search</button>
            
            <div className="messaheIcon" onClick={() => setOpennev(!opennev)}>
              <CgMenuRightAlt/>

              {
                opennev && 
                <Header/>
              }
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Mblnav
