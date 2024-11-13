
import { StudentService } from "../services/StudentService";
import { Student } from "../model/Student"

export class StudentController {
  constructor(private studentService: StudentService) {}

  async getStudentsList() : Promise<any>  {
    try {
      const students = await this.studentService.getAllStudents();
      console.log(`All students : ${JSON.stringify(students)}`);
      return students
     
      
    //   res.json(students);
    } catch (error) {
      console.error("Error fetching students: ", error);
    }
  }
  async addStudent(newStudent:Student) :Promise<any> {
    try{
      const success = await this.studentService.addingStudents(newStudent)
      return success

    } catch (error){
      console.error("Error adding students: ", error);
    }
  }
}
