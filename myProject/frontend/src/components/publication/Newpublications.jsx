import React from 'react'
import {Feature} from '../../dummy';


const Newpublications = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidemiddle">
      <div className="feedCOntainer">
   
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
      
    </div>
  )
}

export default Newpublications
