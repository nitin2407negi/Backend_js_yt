import express from "express";
import mongoose, { Mongoose, mongo } from "mongoose";
import multer from "multer";
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dfylr9fqh', 
        api_key: '275198152619389', 
        api_secret: 'WPhLHn49qhWamSHhrgshCZFGapQ' 
    });


const app = express();

mongoose.connect("mongodb+srv://nitinnegi20001:nDsWqIXT0NO6JQNw@cluster0.8hooijn.mongodb.net/", { dbName: "Nodejs_API" }).then(() => {
    console.log("db is connected")
}).catch(() => console.log(error));

const storage = multer.diskStorage({
    // destination: './public/upload',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  });
  
  const upload = multer({ storage: storage })

const fileSchema=new mongoose.Schema({
  fileName:String,
  public_id:String,
  imageurl:String

})
const File=mongoose.model("cloudinary",fileSchema);

app.get('/',(req,res)=>{
    res.render("index.ejs",{url:null})
})

app.post('/upload', upload.single('file'), async(req, res)=> {
    // console.log("This is my File",req.file);
    const file=req.file.path;

    const cloudinaryResponse=await cloudinary.uploader.upload(file,{
      folder:"Nodejs_API"
    })

    const savetoDb = await File.create({
      fileName:file.originalname,
  public_id:cloudinaryResponse.public_id,
  imageurl:cloudinaryResponse.secure_url
    });

    res.render("index.ejs",{url:cloudinaryResponse.secure_url})

    console.log("cloudinary response",cloudinaryResponse,savetoDb);

  })

const port = 1000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})