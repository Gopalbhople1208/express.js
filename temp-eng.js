import express from "express";

const app = express();

app.set('view engine','ejs')

app.get("/",(req,resp)=>{
resp.render('home',{name:'Gopal Bhople',email:'gbhople63@gamil.com'});
})

app.listen(2202);