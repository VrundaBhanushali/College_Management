import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  public name = '';
  public address = '';
  public gender = '';
  public phone = 0;
  public email = '';

  @Output() save = new EventEmitter<any>();

  onSave() {
    const data = {
      name: this.name,
      address: this.address,
      gender: this.gender,
      phone: this.phone,
      email: this.email

      
    };

    this.save.emit(data);

    
    this.name = '';
    this.address = '';
    this.gender = '';
    this.phone = 0;
    this.email = '';
  }
 

 
}
