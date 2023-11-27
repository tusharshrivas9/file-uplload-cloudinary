const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("connected to mongoose");
}).catch((error)=>{
    console.log("connection fail",error);
})