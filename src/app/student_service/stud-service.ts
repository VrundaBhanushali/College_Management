import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudService {
  student=[
   {name:"Jeet" ,phone:"9313389256",email:"jeet@gmail.com", address:"valsad", gender:"male"},
   {name:"Vrunda" ,phone:"7043789291",email:"vrunda@gmail.com", address:"vapi", gender:"Female"},
   {name:"Krishna" ,phone:"7874089291",email:"krishna@gmail.com", address:"surat", gender:"Female"}
   ];

   getStudents()
   {
    return this.student;
   }

     addStudent(student: any) {
    this.student.push(student);
  }
   
}
