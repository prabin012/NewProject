import { useContext, useState } from 'react';
import './navbar.css'
import { CgProfile, CgMenuRightAlt} from "react-icons/cg";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="navbar">
        <div className="navbarItem">
          <span className="navbarHeader">The Techonlogy works Best When The People Connects</span>
          <span className="navbarInfo">Search  (20202..)</span>
          <div className="navbarSearch">
          <div className="personIcon messaheIcon"  >
              {/* <CgProfile/> */}
          
              <img src={user.profilePicture ?PF + user.profilePicture :PF + "assests/logo2.png"} alt="" />
             
             
            
            </div>
            <div className="sInput navbarSearchfield">
            <select name="" id="" className='navSelect'>
              <option value="">All</option>
              <option value="">Techinical</option>
              <option value="">Non Techinical</option>
            </select>
            <input type="text" className="navbarSearchfieldinput" placeholder="Search" />
            </div>
            
            <button className="navbarSearchButton">Search</button>
            <Link to='/header'>
            <div className="messaheIcon">
              <CgMenuRightAlt/>
            </div>
            </Link>
          </div>
        </div>


      </div>



    </>
  )
}

export default Navbar
