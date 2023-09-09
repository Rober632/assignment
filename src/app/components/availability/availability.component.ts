import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {

  constructor(private userService: UserService) {}
  userData: any = { supplierTime : 0 ,
    repetitiveReservation:0
  };
  handelMinus(){
    this.userData.supplierTime = this.userData.supplierTime -1
    this.userService.setSupplierTime(this.userData.supplierTime)
  }
  handelplus(){
    this.userData.supplierTime = this.userData.supplierTime +1
    this.userService.setSupplierTime(this.userData.supplierTime)
  }
  saveUserData(userForm: NgForm) {
    if (userForm.valid) {      
      const { availabilityTime , availabilityTimeDuration , supplierTime , supplierTimeService , repetitiveReservation , repetitiveReservationType} = this.userData;
      this.userService.setAvailabilityTime(availabilityTime)
      this.userService.setAvailabilityTimeDuration(availabilityTimeDuration)
      this.userService.setSupplierTime(supplierTime)
      this.userService.setSupplierTimeService(supplierTimeService)
      this.userService.setRepetitiveReservation(repetitiveReservation)
      this.userService.setRepetitiveReservationType(repetitiveReservationType)
    }
  }
}
