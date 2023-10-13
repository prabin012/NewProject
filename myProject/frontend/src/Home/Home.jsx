import { NavLink } from 'react-router-dom'
import Add from '../components/add/Add'
// import Eventslider from '../components/event/Eventslider'
import Eventss from '../components/eventSlider/Eventss'
import Header from '../components/header/Header'
import MainHeader from '../components/mainHeader/MainHeader'
import Mblnav from '../components/mblnav/Mblnav'
import Mobile from '../components/mobile/Mobile'
import Navbar from '../components/navbar/Navbar'

import './home.css'
import Head from '../components/main/Head'



const Home = () => {
  return (
    <>
    {/* <Head/> */}
    
     <div className="home">
    <div className="add">
        <marquee class="GeneratedMarquee" direction="left" scrollamount="20" behavior="scroll">
            "Greetings from ProjectMela : Unveiling the World of new project ideas and enovation......"
        </marquee>
    </div>
        <div className="homeBody">
       
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
           <div className="hp5">
           <Add/>
           </div>
          <div className="workplace">
          <NavLink to='/projects' className='workplaceBtn'>WorkPlace</NavLink>
          </div>
         
        </div>
    </div>

   
<Mobile/> 
    </>
  )
}

export default Home
