import express from 'express'
import multer from 'multer'
import path from 'path'


const app = express();
const storage = multer.diskStorage({
    destination:function (req,file,cd){
        cd(null,'upload')
    },
    filename:function(req,file,cd){
        cd(null,file.originalname)



    }
})


//they will install the value multer npm package
const upload = multer ({storage})
app.get("/",(req,resp)=>{
    resp.send(`
        <form action ="/upload" method="post" enctype="multipart/form-data" >
        <input type = file name= "upload file"></input>
        <br></br>
        <button>Upload File</button>
        </form>
        `)
});

app.post("/upload",upload.single('upload file'),(req,resp)=>{

    resp.send({
        message:"File is Upload",
        info: req.file
    });
});
app.listen(4500,()=>{
    console.log("this run correct http://localhost:4500 ")
});