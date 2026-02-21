import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs')
app.get("/add-user",(req,resp)=>{
    resp.render('addUser');
})
app.post("/submit-user",(req,resp)=>{
   
resp.render('submitUser',req.body);
})
app.listen(2020); //this is userName: Gopal_coder ,this is userEmail: gopalarun64@gmail.com ,this is userAge: 19