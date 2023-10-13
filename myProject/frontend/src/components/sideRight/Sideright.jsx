import './sideright.css'
import { notification } from '../../dummy';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Sideright = () => {
  const {user} = useContext(AuthContext);
  return (



    <div className="sideRight">

      <div className="sideRightwrapper">
        <span className="notificationTit">Notification</span>

        {notification.map(n => (
        
          <div className="sideRightNotification">
              <div className="sideRightNotificationTopic">
              <span className="notificationTittle">{n.tittle}</span>
              <span className="notificationDate">{n.date}</span>
            </div>
            <span className="notificarionDescritpion">{n.Description}  </span>
            <span className="descriptionRead">Read more..</span>
            
          </div>
    
        ))}




      </div>
    </div>

  )
}

export default Sideright
