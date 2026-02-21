import express from 'express';
import path from "path";

const app = express();
const fileData = path.resolve("view/normal.html")

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/",(req,resp)=>{
    resp.sendFile(fileData);
})

app.get("/login",(req,resp)=>{
    resp.send(`
        <form action ="/submit" module ="get">
        <input type ="text" placeholder ="Enter Email" name ="Email" />
  <br></br>
        <input type="text" placeholder ="Enter The Password" name ="password" />
        <br></br>
        <button  >Submit</button>
        </form>
        `);
})
app.get("/submit",(req,resp)=>{
   console.log("this user login Details:" ,req.body);
    resp.send("This is the Submit Page");
})
app.use((req,resp)=>{
    resp.status(404).send("Page is Not Found");
    
})
app.listen(2000);