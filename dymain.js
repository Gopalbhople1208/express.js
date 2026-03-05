import express from 'exxpress'

const app = express();

app.get("/home",(req,resp)=>{
    resp.send("This is Home page static routes");
})

app.listen(4000);