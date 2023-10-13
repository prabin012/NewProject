import { useContext, useRef, useState } from "react";
import Header from "../header/Header";
import SideMiddle from "../sideMiddle/SideMiddle";
import "./profile.css";
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";



export default function Profile() {
  const history = useNavigate();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [logout, setLogout] = useState(false);



  const LogOut = () => {
    localStorage.clear();
    history("/");
    window. location. reload()
}
  return (
    <>
  
   <div className="profilePage">
    <div className="profileNav">
    <span className="profileLogo">ProjectMela</span>
    <div className="imagItem-1 profileImage1" onClick={() => setLogout(!logout)}>
                    <img src={
                        user.
                            profilePicture ? PF + user.profilePicture : PF + "assests/logo2.png"}

                        alt="" className='userImage-1'  />
                    <p className="userName">{user.username}</p>

                    {logout &&
                        <div className="logoutOpen">
                            <ul className="logoutItem">
                                <li onClick={LogOut}>Logout </li>
                                {/* <LogoutIcon/> */}

                            </ul>
                        </div>
                    }

                </div>
    </div>
    <div className="sideNav">
      <div className="sivenavItem">
        <li>
        <NavLink className='navItem' to='/projects'>Workshop</NavLink>
        </li>
        <li>
        <NavLink className='navItem' to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink className='navItem' to='/projects'>Project</NavLink>
        </li>
        <li>
        <NavLink className='navItem' to='/'>Publication</NavLink>
        </li>
     
       
      </div>
      <h1>WelCome To Your Profile</h1>
    
    </div>
      

     
   </div>

    </>
  );
}