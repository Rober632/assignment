import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { UserService } from 'src/app/service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/service/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userService : UserService , private translate : LangService){    

}

  isSlideChecked : boolean = true
  slideName = 'مغعلة'
  title = 'task';
  toggleChanges($event: MatSlideToggleModule) {
    this.isSlideChecked = !this.isSlideChecked
    this.isSlideChecked ?  this.slideName = 'مغعلة'  : this.slideName = 'غير مغعلة'
    this.isSlideChecked ? this.translate.setLanguage('ar') : this.translate.setLanguage('en')
  }
  handelRemove(){
    this.userService.clearUserData()
  }
  handelSave(){
    this.userService.saveUserData()
  }
}
