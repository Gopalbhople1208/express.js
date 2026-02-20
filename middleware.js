import express from "express";

const app = express();

//created the function which page can access only if the user is 18 or above they can apply all routes
// function logReq(req,resp,nest){
//     if(! req.query.age || req.query.age <18){
//       resp.send("<h1>Access Denied. You must be at least 18 years old to access this page.</h1>");
//     }else{
//      resp.send("<h1>Welcome to the Home Page</h1>");
//         next();
//     }
// }
// app.use(logReq);//called middleware function (http://localhost:4000/about?age=18)


// //check or block the user based on their IP address
// function ipAdd(req,resp,next){
//     const ip = req.socket.remoteAddress;
//     console.log(ip);
//     if(ip.includes( "192.168.56.1")){
//       return resp.send("<h1>Access Denied. Your IP address is not allowed to access this page.</h1>");
//     }
        
//           next();
    
  

// }
// app.use(ipAdd);//they add the first ip address the :4000 then print the console.log(ip address) and then next() function is called to move to the next middleware or route handler.






//middleware url in multiple route
function callRequired(req,resp,next){
    if(!req.query.age||req.query.age<18){
        console.log(req.query.age);
        resp.send("This Page is not Access");

    }next();
}
function callUrl(req,resp,next){
    console.log("this the url",req.url);
    next();
}//this the url /about?age=45 {"this the url /about?age=45" ,"this the url /",'this the url /research?age=34'}


app.get("/",callUrl,(req,resp)=>{
    resp.send("<h1>Welcome to Home Page</h1>");
})
app.get("/about", callRequired,callUrl,(req,resp)=>{
    resp.send("<h1>Welcome to About Page</h1>");
})
app.get("/research", callRequired,callUrl,(req,resp)=>{
    resp.send("<h1>Welcome to Research Page</h1>");
})
app.use((req,resp)=>{
    resp.status(404).send("<h1>Page Not Found</h1>");
})
app.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000");
});