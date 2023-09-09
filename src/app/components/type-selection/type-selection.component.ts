import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.css']
})
export class TypeSelectionComponent {
  userData :any
  constructor(private userService: UserService) {
    this.userData = { type : ''};
  }
  saveUserData(userForm: NgForm) {
    if (userForm.valid) {      
      const { type } = this.userData;
      console.log(type);
      this.userService.setType(type)
      const user=this.userService.getUserData()
      console.log(user);
      
      
    }
}}
