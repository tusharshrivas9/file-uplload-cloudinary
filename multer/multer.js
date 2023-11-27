const multer = require("multer")
const { v4: uuidv4}  = require("uuid")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     
        console.log(file);

        const randomNumber = uuidv4()

        const fname = randomNumber+""+file.originalname

      cb(null, fname)
    }
  })
  
   const upload = multer({ storage})

   module.exports = upload