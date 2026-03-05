import mongoose from 'mongoose'
import express from 'express'
import studentModel from './model/studentModel.js'

const app = express();

app.use(express.json());
 await mongoose.connect("mongodb://localhost:27017/studentData").then(()=>{
        console.log("_____connected_____");
    })
app.get('/',async (req,resp)=>{

   const studentData = await studentModel.find();
   resp.send(studentData);

})
app.post('/save',async (req,resp)=>{

    

    try{

        const student= await studentModel.create(req.body);
        resp.json({ message :"stored successfully",success:true,student});
    }catch{
        resp.status(500),json({error:err.message});
    }
    
   
  

})

app.listen(2500,()=>{
    console.log("this server is run corrected http://localhost:2500")
})

// async function dbConnection(){
//     await mongoose.connect("mongodb://localhost:27017/school");
//     const schema=   mongoose.Schema({
//         name:"String",
//         age:"number",
//         email:"String"
//     })
    
//     const studentsModel =  mongoose.model("student",schema);
//     const result= studentsModel.find();
//     console.log(result);

// }
// dbConnection(); 