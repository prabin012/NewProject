import React, { useContext, useRef } from 'react'
import { Link,  } from 'react-router-dom'
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';



const Login = () => {

  const email = useRef();
  const password = useRef();
  
  const {isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) =>{
    e.preventDefault();
    loginCall(
      {email:email.current.value, password:password.current.value},
       dispatch
       );
       
  };

  return (
    <>
      <div className="register">
        <div className="registerItem">
<div className="regForm">
<form  className="registerForm" onSubmit={handleClick}>
            <span className="registerTittle">Login Here</span>
            <laber className="useremail labels">Email</laber>
            <input type="email" className="emailinput texts" ref={email} />

            <laber className="userPassword labels">Password</laber>
            <input type="password" className="Passwordinput texts" ref={password}/>

            <button className='submitbtn loginbtn' type='submit' >  { isFetching ? "Loding" :  "Log In" }</button>

            <div className="nextPage">
            <p>Didn't have an account  ! </p><Link to= '/register'> - Register </Link>
           
            
            </div>
          </form>
</div>
        

          <div className="regImage">
          <div className="regGreet">
  <h1>Welcome Back !</h1>
  <p>To keep continue with us please Login Here !</p>
  <span>www.projectmela.com</span>
</div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login
