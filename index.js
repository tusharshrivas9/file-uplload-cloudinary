const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 3500
const db = require("./db/db")
const upload = require("./multer/multer")
const cloudinary = require('cloudinary')
const fs = require("fs")


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET    
  });



app.post("/fileupload",upload.single("myfile"),(req,res)=>{

    console.log(req.file.path);
    cloudinary.uploader.upload(req.file.path,
    function(error, result) {
        console.log(result); 

        fs.unlink(res.file.path,function(err){

         if (err) console.log(err)
         else console.log("file deleted");
        
        })
    });

    res.status(200).send({
        msg:"file uploaded sucessfully",
        data:result
    })
})

app.listen(port,()=>{
    console.log(`listening to server ${port}`);
})