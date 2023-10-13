import { useContext, useState } from "react";

import "./workshop.css";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

import { IoIosArrowDown , IoIosBook , IoMdHome ,IoIosApps,IoIosDocument,IoIosPerson, IoMdBuild} from "react-icons/io";


export default function Workshop() {
    const history = useNavigate();
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [logout, setLogout] = useState(false);

    const LogOut = () => {
        localStorage.clear();
        history("/");
        window.location.reload()
    }
    return (
        <>

            <div className="profilePage">
                <div className="profileNav">
                    <span className="profileLogo">ProjectMela</span>
                    <div className="workshopItem">

                        <NavLink to='/' className="wHome"> <span className="wsubscription workshopItems">workshop<IoIosArrowDown className="i10"/></span></NavLink>
                        <NavLink to='/' className="wHome"> <span className="wsubscription workshopItems">Subscription <IoIosArrowDown className="i10"/></span></NavLink>
                        <NavLink to='/' className="wHome">   <span className="wLear workshopItems">Learn <IoIosArrowDown className="i10"/></span></NavLink>
                        <NavLink to='/' className="wHome">    <span className="wCertificate workshopItems">Certiificate <IoIosArrowDown className="i10"/></span></NavLink>
                    </div>

                    <div className="imagItem-1 profileImage1 workProfile" onClick={() => setLogout(!logout)}>
                        <img src={
                            user.
                                profilePicture ? PF + user.profilePicture : PF + "assests/logo2.png"}

                            alt="" className='userImage-1' />
                        {/* <p className="userName">{user.username}</p> */}

                        {logout &&
                            <div className="logoutOpen">
                                <ul className="logoutItem">
                                    <li><NavLink to='/profile' > Profile</NavLink></li>
                                    <li onClick={LogOut}>Logout </li>
                                    {/* <LogoutIcon/> */}

                                </ul>
                            </div>
                        }

                    </div>
                    <div className="worksdhopDropdown">
                        <div name="" id="" className="wokshopSelect">
                            <p>Personal</p>
                            <span>admin</span>
                            <span>Person : 1</span>
                            
                        </div>
                    </div>
                    
                </div>
                
               

            </div>

           

            <div className="workplace">
                <NavLink to='/' className='workplaceBtn'>Feed</NavLink>
            </div>


            <div className="workshopPath">
                     <div className="createTeam">
                        <button className="createTeambtn">+ Create Team</button>
                    </div>
                <div className="wpath">http://localhost:3000/projects/ </div>
                   

                   
                    
             </div>
            <div className="sideNav">

                <div className="sivenavItem">
                    
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/projects/mainPage'><IoMdHome className="i10"/> Home   </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/projects/workshopmain'><IoIosDocument className="i10"/> Project</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/projects/subscription'> <IoIosApps className="i10"/>Application</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/'> <IoMdBuild className="i10"/>Services</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/'> <IoIosBook className="i10"/>Learn</NavLink>
                    </li >
                    <li className="navItem">
                        <NavLink className='navItem navItem-workshop' to='/'><IoIosPerson className="i10"/>Profile</NavLink>
                    </li>


                </div>
                
               
                <Outlet />
            </div>



           
        </>
    );
}