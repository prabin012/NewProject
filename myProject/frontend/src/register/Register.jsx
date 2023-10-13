import './register.css'

import axios from "axios";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'


const Register = () => {
  const [file, setFile] = useState(null);

  const username = useRef();
  const email = useRef();
  const city = useRef();
  const college = useRef();
  const password = useRef();
  const profilePicture = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
      const user = {
        username: username.current.value,
        email: email.current.value,
        city: city.current.value,
        college: college.current.value,
        password: password.current.value,
      };
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        user.profilePicture = fileName;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("/newregister", user);
        history("/login");
      } catch (err) {
        console.log(err);
      
    }
  };

  return (
    <>
      <div className="register">
     
        <div className="registerItem">
        <div className="regImage">
<div className="regGreet">
  <h1>Welcome </h1>
  <h3>TO</h3>
  <h1>ProjectMela</h1>
  <p>To keep continue with us please register !</p>
  <span>www.projectmela.com</span>
</div>
        </div>
        <div className="regForm">
          <form className="registerForm" onSubmit={handleClick}>
            <span className="registerTittle">Register Here</span>

          {/* <span className="googleLogin">SignUp with Google</span> */}
            <label className="username labels">Name</label>
            <input type="text" className="nameinput texts"  ref={username} required/>

            <label className="useremail labels">Email</label>
            <input type="email" className="emailinput texts"  ref={email} required/>

            <label className="useraddress labels">Address</label>
            <input type="text" className="addressinput texts"  ref={city} required />

            <label className="userCollege labels">College</label>
            <input type="text" className="Collegeinput texts"  ref={college} required/>

            <label className="userCollege labels">Image</label>
            <input type="file" name="file" id="file" accept=".png,.jpeg,.jpg" ref={profilePicture}  onChange={(e) => setFile(e.target.files[0])}/>


            <label className="userPassword labels">Password</label>
            <input type="password" className="Passwordinput texts"  ref={password} required/>

            <button className='submitbtn' type="submit">Sign Up</button>
            <div className="nextPage">
              
              <p>Already have an account !</p><Link to= '/login'> - Login</Link>
            
            </div>
           
          </form>
          </div>
         

        </div>



      </div>



    </>
  )
}

export default Register
