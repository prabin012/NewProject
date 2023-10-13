import { Link, useNavigate ,NavLink} from 'react-router-dom'
import './header.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

import Mobile from '../mobile/Mobile';
import { IoIosArrowDown } from "react-icons/io";
import { Feature } from '../../dummy';
import Features from './features/Features';
import Recent from './features/Recent';
import Upcomming from './features/Upcomming';
// import Recent from './features/Recent';

// import { useNavigate } from 'react-router'

const Header = () => {
    const history = useNavigate();
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [logout, setLogout] = useState(false);

    const[openfeature , setOpenfeature] = useState(false);
    const[openrecent , setOpenrecent] = useState(false);
    const[openupcoming , setOpenupcoming] = useState(false);
    const[openservice , setOpenservice] = useState(false);

const menuRef = useRef();
const imgRef = useRef();

window.addEventListener('click', (e) =>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
        setLogout(false)
    }
})

    const LogOut = () => {
        localStorage.clear();
        history("/");
        window. location. reload()
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    {/* <img className="logoImage" src="./assests/l2.jpg" alt="" /> */}
                </div>
                <div className="headerItem">
                    
                <Link to='/' className="featureProject fProject"><span onClick={()=> setOpenfeature(!openfeature)}>Feature Project <IoIosArrowDown />
                </span></Link>
               
                <Link to='/' className="upcommingProject fProject"><span onClick={()=> setOpenupcoming(!openupcoming)}>Upcoming Project <IoIosArrowDown/></span></Link>
                <Link to='/' className="recentProject fProject"><span onClick={()=> setOpenrecent(!openrecent)}>Recent Project <IoIosArrowDown/></span></Link>
                        <span className="about fProject" onClick={()=> setOpenfeature(!openfeature)}>Services <IoIosArrowDown/></span>
                   
                </div>
                <div  className="imagItem-1 " onClick={() => setLogout(!logout)}>
                    <img src={
                        user.
                            profilePicture ? PF + user.profilePicture : PF + "assests/logo2.png"}

                        alt="" className='userImage-1' ref={menuRef}/>
                    <p className="userName">{user.username}</p>

                    { logout && (
                    
                        <div ref={imgRef}className="logoutOpen">
                            <ul className="logoutItem">
                                <NavLink to='/profile'><li>Profile</li></NavLink>
                                <li onClick={LogOut}>Logout </li>
                                {/* <LogoutIcon/> */}

                            </ul>
                        </div>
                    )
                    }

                </div>
            </div>
            { openfeature &&
                <Features/>

            }
            { openrecent &&
                <Recent/>

            }
            { openupcoming &&
                <Upcomming/>

            }
            {/* { openservice &&
                <Features/>

            } */}
            <Mobile />
        </>
    )
}

export default Header
