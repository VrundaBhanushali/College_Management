import { Component, inject, OnInit } from '@angular/core';
import { StudService } from '../student_service/stud-service';
import { CommonModule } from '@angular/common';
import { Table } from '../shared/table/table';
import { Form } from '../shared/form/form';


@Component({
  selector: 'app-student',
  imports: [CommonModule,Table,Form],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit {
   private studService = inject(StudService);

   students: any[] = [];
   ngOnInit(): void {
    
    this.students = this.studService.getStudents();
  }
  addStudent(newStudent: any) {
    this.studService.addStudent(newStudent);
    this.students = this.studService.getStudents()

  }

}
