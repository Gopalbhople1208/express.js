
import express from "express";
import path from "path";


const app = express();
 const filePath = path.resolve("view");

app.get("",(req,resp)=>{
   
  
    resp.sendFile(filePath+"/home.html");
});

app.get("/login",(req,resp)=>{
    
    resp.sendFile(filePath+"/login.html");
})
app.get("/about",(req,resp)=>{
   
    resp.sendFile(filePath+"/about.html");
})
app.use((req,resp)=>{
       
        resp.status(404).sendFile(filePath+"/404.html");
})
app.listen(5003,()=>{
    console.log("Server is running on port http://localhost:5003");
});