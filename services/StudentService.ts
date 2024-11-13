import { Student } from "../model/Student";
import * as fs from "fs";
import * as path from "path";

export class StudentService {
    // private apiUrl = "http://localhost:4000/students"
    private dbFilePath = path.resolve(__dirname, "../db.json");

    async getAllStudents(): Promise<Student[]>{
        try{
            // const response = await fetch(this.apiUrl)
            const data = fs.readFileSync(this.dbFilePath, "utf-8");
            const students :Student[]= JSON.parse(data);
            return students;
            // if(!response.ok){
            //     throw new Error("failed to fetch students")
            // }
            // return await response.json();
        } catch (error){
            console.error("Error fetching students: ", error);
            throw error
        }
    }

    async addingStudents(newStudent:Student):Promise<void>{
        const data=fs.readFileSync(this.dbFilePath,"utf-8")
        const students : Student[] =JSON.parse(data)
        students.push(newStudent)
        fs.writeFileSync(this.dbFilePath,JSON.stringify(students),"utf-8")
    }
}