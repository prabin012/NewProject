
import { app } from "./app.js";
import { connectDb } from "./connection/dbConnection.js";


//database connection 

connectDb();




 //server
app.listen(8800, ()=>{
    
    console.log("Server running at port",8800)
});
