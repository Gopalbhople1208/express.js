const express = require("express");

const app = express();
app.get("",(req,resp)=>{
    resp.send("<h1>Welcome to Express JS Programming</h1>");
});
app.get("/home",(req,resp)=>{
    resp.send("<h1>Welcome to Express JS Programming in Home Page</h1>");
});
app.get("/about",(req,resp)=>{
    resp.send("<h1>Welcome to Express JS Programming in About Page</h1>");
});
app.listen(5000,()=>{
    console.log("Server is running on port http://localhost:5000")
});