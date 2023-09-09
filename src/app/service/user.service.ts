import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null;

  constructor() {
    this.userData = { username  : '',
  image : '' ,
  type : '' ,
  availabilityTime : '',
  availabilityTimeDuration : '',
  supplierTimeService : '',
  supplierTime : '' , 
  repetitiveReservation : '' ,
  repetitiveReservationType : ''

};
  }

  setUsername(username: string) {
    this.userData.username = username;
  }

  setImage(image: string) {
    this.userData.image = image;
  }

  setType(type: string) {
    this.userData.type = type;
  }
  setAvailabilityTime(time : any ){
    this.userData.availabilityTime = time 
  }
  setAvailabilityTimeDuration(duration : any ){
    this.userData.availabilityTimeDuration = duration 
  }
  setSupplierTime(supplierTime : any) {
    this.userData.supplierTime  = supplierTime ;
  }
  setSupplierTimeService(supplierTimeService: string) {
    this.userData.supplierTimeService = supplierTimeService;
  }
  setRepetitiveReservation(repetitiveReservation: number) {
    this.userData.repetitiveReservation = repetitiveReservation;
  }  
  setRepetitiveReservationType(repetitiveReservationType: string) {
    this.userData.repetitiveReservationType = repetitiveReservationType;
  }  
  setCalendar(calendar : any){
    this.userData.calendar = calendar
    console.log(this.userData);
    
  }

  getUserData() {
    return this.userData;
    console.log(this.userData);
    
  }

  clearUserData() {
    this.userData = { username  : '',
    image : '' ,
    type : '' ,
    availabilityTime : '',
    availabilityTimeDuration : '',
    supplierTimeService : '',
    supplierTime : '' , 
    repetitiveReservation : '' ,
    repetitiveReservationType : '' ,
    calendar : ''
  };
  }
}