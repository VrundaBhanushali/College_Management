import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeachService {
   teacher=[
   {name:"Darshna" ,phone:"8929187654",email:"darshna@gmail.com", address:"baroda", gender:"Female"},
   {name:"Premal" ,phone:"8943789291",email:"premal@gmail.com", address:"mumabi", gender:"Female"},
   {name:"Rachna" ,phone:"9023789291",email:"rachna@gmail.com", address:"surat", gender:"Female"}
   ];
   getTeachers()
   {
    return this.teacher;
   }
    addTeacher(teacher: any) {
    
    this.teacher.push(teacher);
  }
}
