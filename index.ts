import express from "express"
import bodyParser from "body-parser"
import { StudentController } from "./controllers/studentControllers";
import { StudentService } from "./services/StudentService";

const app =express()
const port=4000

app.use(bodyParser.json())

const studentService = new StudentService();
const studentControllers = new StudentController(studentService)

app.get('/students', async(_req,res) =>{
    try{
        const student = await studentControllers.getStudentsList()
        res.json(student)
    }catch(error){
        res.status(500).send('Error fetching students');
    }
})
app.post('/students', async(req,res)=>{
    try{
        const newStudent=await studentControllers.addStudent(req.body)
        res.json(newStudent)
    }catch(error){
        res.status(500).send('Error fetching students');
    }
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
})