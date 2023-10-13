import  express  from "express";
import { config } from "dotenv";
import cors from "cors";
import multer from "multer";

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import postRoute from './routes/posts.js'


export const app =express();
app.use(cors());
//config env connection
config({
    path : "./connection/config.env",
})
app.use(express.static(path.join(__dirname, "public/images")))

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware used

app.use(express.json());
app.use('/api',userRoute);
app.use('/api',authRoute);
app.use('/api',postRoute);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });




