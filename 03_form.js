import express from "express";
import home1 from "./pages/home1.js";
import submit from "./pages/submit.js";

const app = express();

app.get("",(req,resp)=>{
    resp.send(home1());
})

app.get("/login",(req,resp)=>{
    resp.send(`<form action="/submit" method ="post">
        <input type="text" name="username" placeholder= "Enter username"/>
        <br></br>
        <input type="text" name="Email" placeholder ="Enter Email ID" />
        <br></br>
        <input type ="password" name ="password" placeholder="Enter Password" />
        <br></br>
        <button type ="/submit">Submit</button>
        `)
})

app.post("/submit",(req,resp)=>{
    resp.send(submit());
})



app.listen(5002,()=>{
    console.log("Server is running on port http://localhost:5002");
})