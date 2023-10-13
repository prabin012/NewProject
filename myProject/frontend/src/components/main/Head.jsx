import Front from '../front/Front'
import './head.css'

const Head = () => {
  return (
    <>
     <div className="headMain">
        <div className="headelement">
            <div className="headItemImage">
                <img src="assests/p1.png" alt="" className="logoItem" />
            </div>
            <div className="headItem">
                <ul className="headItems">
                    <li className="items-1">Feed</li>
                    <li className="items-1">Workshop</li>
                    <li className="items-1">Subscription</li>
                    <li className="items-1">Services</li>
                </ul>
                <button className="signUp-1">Sign up</button>
            </div>
        </div>
        </div> 
        <Front/>
    </>
  )
}

export default Head
