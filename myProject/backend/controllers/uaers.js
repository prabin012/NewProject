import { Users } from "../models/NewRegister.js";

import { falsereturn, features } from "../utils/feature.js";

export const newUser = async(req, res)=>{
    const { name, email, contact,password} = req.body;
  
    // const users = await User.findOne({ownerEmail});
    // if(users){
    //     console.log("user already exist");
    //    return falsereturn(res,`false`,`user already exist`);
        
    // }
   
    await Users.create({
      name, 
      email,
        contact,
        password
        
        
    });
    
    features(res,`registation successfull`,201,true);
    console.log("successdful register");
    
    
   
  };