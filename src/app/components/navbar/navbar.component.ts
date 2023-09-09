import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userService : UserService){}
  isSlideChecked : boolean = true
  slideName = 'مغعلة'
  title = 'task';
  toggleChanges($event: MatSlideToggleModule) {
    this.isSlideChecked = !this.isSlideChecked
    this.isSlideChecked ? this.slideName = 'مغعلة' : this.slideName = 'غير مغعلة'
  }
  handelRemove(){
    this.userService.clearUserData()
  }
}
