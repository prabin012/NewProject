import './sideleft.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Sideleft = () => {
  return (

    <div className="sideLeft">
      <div className="slideleftwrapper">
        <p className="filter">Filter</p>
        <hr />
        <ul className="sideleftList">
          <li className="sideleftItem">
            <span className="searchUsername">Username</span>
          </li>
          <li className="sideleftItem">
            <span className="searchUniversity">University</span>
          </li>
          <li className="sideleftItem-1">
            <div className="searchDate">
              <span className="dateSearch">Date</span>
              <span>To</span>
              <input type="date" name="" id="" className="searchBydate" />
              <span>From</span>
              <input type="date" name="" id="" className="searchBydate" />
            </div>
          </li>
          <li className="sideleftItem">
            <span className="live">Live</span>
          </li>
          <li className="sideleftItem">
            <span className="recentUpload">Recent Upload</span>
          </li>
          <li className="sideleftItem">
            <span className="newToyou">New To You</span>
          </li>
          <li className="sideleftItem">
            <span className="others">Others</span>
          </li>
          <li className="sideleftItem-1">
            <span className="seeMore">See More </span>
          </li>
          <hr className="Horizontal" />
        </ul>


        <div className="contactUs">
          <p className="reachUs">Reach Us</p>

          <li className='contactNumberItem'>
            <CallIcon className='caIlcon' />
            <span className='cNumber'>+91-98XXXXXX00</span>
          </li>
          <li className='contactNumberItem'>
            <EmailIcon className='emailIcon' />
            <span className="contactEmail">  example@gmail.com</span>
          </li>

          <div className="contactIcons">
            <FacebookIcon className='facebookIcon i-1' />
            <InstagramIcon className='instagramIcon i-1' />
            <LinkedInIcon className='linkedinIcon i-1' />
            <TwitterIcon className='twitterIcon i-1' />

          </div>

          



        </div>
      </div>

    </div>



  )
}

export default Sideleft
