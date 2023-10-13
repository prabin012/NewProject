import mongoose from "mongoose";

export const connectDb = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017' ,{
    dbName:"projectMela"
}).then(()=>{
        console.log("db connected");
    }).catch(()=>{
        console.log("error");
    });
};