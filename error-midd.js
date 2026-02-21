import express from "express";

const app = express();

app.get("/",(req,resp)=>{
    resp.send("this is the Home page");
})
app.get("/user",(req,resp)=>{

    resp.send("this user page");//fist genrate the error send1 they show the error.send("") after user this error is corrected then send the show return properly 
})
app.get("/submit",(req,resp)=>{
    resp.send("this submit page");
})
app.get("/error",(req,resp,next)=>{
    const error = new error("");
    error.status = 404;
    next(error);
})
function errorHand(err,req,resp,next){
    resp.status(err.status || 500).send("Try After Some Time! ");
}
app.use(errorHand);
app.listen(2020);