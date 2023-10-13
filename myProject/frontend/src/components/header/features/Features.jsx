import React, { useContext } from 'react'

import '../features/features.css'

import {Feature} from '../../../dummy';
import Mobile from '../../mobile/Mobile';
import Mblnav from '../../mblnav/Mblnav';
import { AuthContext } from '../../../context/AuthContext';

const Features = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <Mblnav/>
      <div className="main-faeture-cont">
        {Feature.map((f)=>(
          <div className="h22">
 <div className="featurebody">
          <span className="bdytitile">{f.tittle}</span>
          <span className="desscrption">{f.description}</span>
          <span className="readmore">more..</span>
          <img src={PF + f.image} alt="" className="featureImage" />
          <span className="featureDate">{f.date}</span>
          <span className="featureName">{f.username}</span>
        </div>
          </div>
         
        
      
        ))}
        
        </div>

        <Mobile/>
    </div>
  )
}

export default Features
