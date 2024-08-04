import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  register(regForm:NgForm){
  console.log(regForm.value)
}
 
   reset(regForm:NgForm){
     regForm.reset
   }

}
