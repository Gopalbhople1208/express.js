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

app.put("/update/:id", async (req,resp)=>{

//update the all data user id 69a7ef192cde88a5f77ac1e2 is update successfully by mongoose use
    const id = req.params.id;

    console.log(req.body,id);

    const studentData = await studentModel.findByIdAndUpdate(id,{...req.body})


    resp.send({
        message:'data is update',
        success:true,
        studentInfo:studentData
    })
})


app.delete("/delete/:id", async (req,resp)=>{
    const id = req.params.id;
//delete is work successfully
const studentData = await studentModel.findByIdAndDelete(id)


resp.send({
    message:"this data is delete",
    success:true,
    studentInfo:studentData
})
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