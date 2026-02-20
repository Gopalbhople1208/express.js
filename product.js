import express from "express";

import path from "path";


const app =express();
const filedata = path.resolve();
const filePath= path.join(filedata,"product");
function checkRoute(req,resp,next){
    console.log(req.url);
    next();

}
app.use(checkRoute);


app.get("/",(req,resp)=>{
    resp.sendFile(path.join(filePath, "home.html"));
})

app.get("/Content",(req,resp)=>{
    resp.sendFile(path.join(filePath, "Content.html"));
})
app.get("/Service",(req,resp)=>{
    resp.sendFile(path.join(filePath, "Service.html"));
})
app.use((req,resp)=>{
    resp.status(404).sendFile(path.join(filePath, "404.html"));
})
app.listen(5011,()=>{
    console.log("Server is running on port http://localhost:5011");
})