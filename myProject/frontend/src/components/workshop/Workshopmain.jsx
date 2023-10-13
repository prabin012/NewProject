import React from 'react'
import SideMiddle from '../sideMiddle/SideMiddle'
import { IoIosArrowDown , IoIosBook , IoMdHome ,IoIosApps,IoIosDocument,IoIosPerson, IoMdBuild} from "react-icons/io";
const Workshopmain = () => {
  return (
    <div>
      <div className="subscription">
      <div className="workshopMain">
            
            <div className="workshopMainPage">
                <div className="binHelp">
                <span className="bin">Bin</span>
                <span className="helps">Help</span>
                </div>
                <div className="workmainIconsone">
                <span className="recomendation"> <IoIosBook className="iconsWorkshop"/> <br />For You</span>
                <span className="recomendation">  <IoIosBook className="iconsWorkshop"/> <br />word</span>
                <span className="recomendation">  <IoIosBook className="iconsWorkshop"/> <br />Excell</span>
                <span className="recomendation">  <IoIosBook className="iconsWorkshop"/> <br />Powerpoint</span>
                <span className="recomendation">  <IoIosBook className="iconsWorkshop"/> <br />Social</span>
                <span className="recomendation">  <IoIosBook className="iconsWorkshop"/> <br />Resuma</span>
               

                </div>
               
                
                {/* <span className="recomendation">Recomendation</span> */}
            </div>

            <div className="workshopMainItem">
                <p>Want to Try ?</p>
                <div className="wcontainer">
                <div className="workshopElement">
                    <img className="workshopElementItem" src="" alt="not available" />
                    <p>Word</p>

                </div>
                <div className="workshopElement">
                <img className="workshopElementItem" src="" alt="not available" />
                    <p>Word</p>
                </div>
                <div className="workshopElement">
                <img className="workshopElementItem" src="" alt="not available" />
                    <p>Word</p>
                </div>
                <div className="workshopElement">
                <img className="workshopElementItem" src="" alt="not available" />
                    <p>Word</p>
                </div>
                <div className="workshopElement">
                <img className="workshopElementItem" src="" alt="not available" />
                    <p>Word</p>
                </div>
                </div>
               
               
                
            </div>

            <div className="workshopMenu">
                <div className="recentProjectWorkshop">Recent Project</div>
                <div className="searchProjectWorkshop-1" ><input className="searchProjectWorkshop" type="text" placeholder="Search"/></div>
                <div ><button className="CreateProjectWorkshop"> + Upload Project</button></div>
            </div>
            <div className="workshopBoxes">

                <input type="text" className="bonesitem" />
                <input type="text" className="bonesitem" />
                <input type="text" className="bonesitem" />
                <input type="text" className="bonesitem" />
                <input type="text" className="bonesitem" />
                <input type="text" className="bonesitem" />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Workshopmain
