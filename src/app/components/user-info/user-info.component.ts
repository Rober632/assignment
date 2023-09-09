import { Component, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  constructor(private userService: UserService) {}
  userData: any = {
    username: '',
    image: '',
  };
  saveUserData(userForm: NgForm) {
    if (userForm.valid) {      
      const { username, image } = this.userData;
      this.userService.setUsername(username)
      this.userService.setImage(image) 
    }
  }
}
