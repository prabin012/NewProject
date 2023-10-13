import Add from "./components/add/Add";
import Register from "./register/Register";

import {BrowserRouter as Router, Routes, Route,  Navigate} from 'react-router-dom'
// import Register from "./register/Register";

import Login from "./login/Login";

import Home from "./Home/Home";

import CreateProduct from "./components/createProduct/CreateProduct"
import SideMiddle from "./components/sideMiddle/SideMiddle";
import Features from "./components/header/features/Features";
import Upcomming from "./components/header/features/Upcomming";
import Recent from "./components/header/features/Recent";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Publication from "./components/publication/Publication";
import Workshop from "./components/workshop/Workshop";
import Subscription from "./components/workshop/Subscription";
import Certificate from "./components/workshop/Certificate";
import Learn from "./components/workshop/Learn";
import Workshopmain from "./components/workshop/Workshopmain";
import MainPage from "./components/workshop/MainPage";



function App() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    
    <div className="App">
   

    {/* <Register/> */}

    <Router>
      
       
    <Routes>
    <Route exact
     path="/" element={user ? <Home/> :<Login/>} 
    />
    <Route 
    path="/register" element ={ user ? <Navigate to="/"/> : <Register/>}
    />
    <Route 
    path="/login" element ={ user ?   <Navigate to= "/"/> : <Login/> }
    />
  
    <Route path="/createProduct" element ={<CreateProduct/>}/>
    <Route path="/feed"  element ={<SideMiddle/>}/>
    <Route path="/feature" element ={<Features/>}/>
    <Route path="/upcomming" element ={<Upcomming/>}/>
    <Route path="/recent" element ={<Recent/>}/>
    <Route  path="/header" element ={<Header/>}/>
    <Route  path="/newFeed" element ={<Feed/>}/>
    <Route  path="/publication" element ={<Publication/>}/>
    <Route  path="/profile" element ={<Profile/>}/>
    <Route  path="/projects" element ={<Workshop/>}>
           <Route  path="workshopmain" element ={<Workshopmain/>}/>
           <Route  path="subscription" element ={<Subscription/>}/>
          <Route  path="learn" element ={<Certificate/>}/>
           <Route  path="certificate" element ={<Learn/>}/>
           <Route  path="mainPage" element ={<MainPage/>}/>
    </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
