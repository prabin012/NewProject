import './event.css'
import Event from './Event';

const Eventslider = () => {

    const images = [
        'assests/banner.png',
        'assests/banner.png',
        'assests/banner.png',
        
        
        // Add more image URLs as needed
      ];
  return (
    <div>
  
      <Event images={images} />
    </div>
  )
}

export default Eventslider
