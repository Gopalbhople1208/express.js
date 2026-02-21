import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));//GET / 304 2.662 ms - -  & GET /user 404 0.593 ms - 18
app.get("/",(req,resp)=>{
    resp.send("this is user page");
})
app.get("/admin",(req,resp)=>{
    resp.send("This is admin Page");
})
app.get("/works",(req,resp)=>{
    resp.send("This is works page");
})
app.get("/wait",(req,resp)=>{
    setTimeout(()=>{
    resp.send("the route runing time is 1 mins ");
    },1000);
})
app.use((req,resp)=>{
    resp.status(404).send("Page is not found!")
})
app.listen(6060);