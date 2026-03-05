import mongoose from 'mongoose'
import express from 'express'
import studentModel from './model/studentModel.js'

const app = express();


 await mongoose.connect("mongodb://localhost:27017/studentData").then(()=>{
        console.log("_____connected_____");
    })
app.get('/',async (req,resp)=>{

   const studentData = await studentModel.find();
   resp.send(studentData);

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