
import SideMiddle from '../sideMiddle/SideMiddle';

import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Mblnav from '../mblnav/Mblnav';
import Eventss from '../eventSlider/Eventss';
import MainHeader from '../mainHeader/MainHeader';
import Sideleft from '../sideLeft/Sideleft';
import Sideright from '../sideRight/Sideright';
import Newpublications from './Newpublications';

const Publication = () => {
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
        <Newpublications/>
          {/* {posts.map((p) =>(
            <Newpublications key={p._id} post={p} />
          ))} */}
       </div>
      <div className="rside">
          <Sideright />
        
      </div>
    </div>
    </div>
  )
}

export default Publication
