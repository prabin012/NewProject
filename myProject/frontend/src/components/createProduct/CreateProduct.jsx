import { useContext, useRef, useState } from 'react';
import Header from '../header/Header'
import MainHeader from '../mainHeader/MainHeader'
import './createProduct.css'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import Home from '../../Home/Home';
import Mobile from '../mobile/Mobile';

const CreateProduct = () => {
  const [file, setFile] = useState(null);

  const {user} = useContext(AuthContext);

  const tittle = useRef();
  const publicedate = useRef();
  const description = useRef();
  const collegepublication = useRef();
  const createdby = useRef();
  const img = useRef();
  const history = useNavigate();
 

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      username: user.username,
      college: user.college,
      address: user.city,
     tittle: tittle.current.value,
     publicedate: publicedate.current.value,
     description: description.current.value,
     collegepublication: collegepublication.current.value,
     createdby: createdby.current.value,

    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      
      try {
        await axios.post("/upload", data);
    
      } catch (err) {}
      
    }
    try {
      await axios.post("/newPost", newPost);
      history("/");
      alert("Upload Sucessfully")
      window.location.reload();
    } catch (err) {}
  };

  return (
    <>
        {/* <MainHeader/> */}

      <div className="register">
        <div className="registerItem">
          <div className="regForm">
            <h4>Welcome To Project Mela!</h4>
            <form action="" className="registerForm" onSubmit={submitHandler}>
              <h4 className="registerTittle">Create Your Post Here !</h4>
            


            {/* <span className="googleLogin">SignUp with Google</span> */}
              <label className="username labels">Tittle</label>
              <input type="text" className="nameinput texts" ref={tittle}/>

              <label className="useremail labels">Publication Date</label>
              <input type="date" name="date" id="date"className="nameinput texts" ref={publicedate}/>

              <label className="usernumber labels">Description</label>
              <textarea name="desc" id="desc" cols="10" rows="1" className="descinput texts" ref={description}></textarea>

              <label className="useraddress labels">College of Pubication</label>
              <input type="text" className="addressinput texts" ref={collegepublication}/>

              <label htmlFor='file'  className="userImage-12 labels" >Upload Image </label>
              <input type="file" className="uImage" name="file" id="file" accept=".png,.jpeg,.jpg" ref={img}  onChange={(e) => setFile(e.target.files[0])}/>

              <label className="userPassword labels">Created By </label>
              <input type="text" className="Passwordinput texts" ref={createdby}/>

              <button className='submitbtn' type="submit">Upload</button>
              <div className="nextPage">
                
              <a href="">Your Post Has Been Uploded !</a>
              
              </div>
            
          </form>
        </div>
        <div className="regImage1"></div>
      </div>
    </div>

    <div className="backHome">
    <Mobile/>
    </div>
    </>
  )
}

export default CreateProduct
