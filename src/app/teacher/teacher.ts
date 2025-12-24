import { Component, inject, OnInit } from '@angular/core';
import { TeachService } from '../teacher_service/teach-service';
import { CommonModule } from '@angular/common';
import { Table } from '../shared/table/table';
import { Form } from '../shared/form/form';

@Component({
  selector: 'app-teacher',
  imports: [CommonModule,Table,Form],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher implements OnInit {
 private teachService = inject(TeachService);

   teachers: any[] = [];

  ngOnInit(): void {
    this.teachers = this.teachService.getTeachers();
  }


  addTeacher(newTeacher: any) {
    this.teachService.addTeacher(newTeacher);
    this.teachers = this.teachService.getTeachers();
  }
  
}
