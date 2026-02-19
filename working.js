//const express = require("express");//this case export and import file is like js this change the json type commonjs to module
import express from "express";
import Home from "./pages/home.js";

const app = express();

app.get("",(req,resp)=>{
    resp.send("<h1>Welcome to Express JS Programming</h1>");
});

app.get("/home",(req,resp)=>{
    resp.send(Home());
})

app.listen(5001,()=>{
    console.log("Server is running on port http://localhost:5001");
})