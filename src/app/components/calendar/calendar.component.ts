import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
 
  userData: any = {};
  times: string[] = [];
  sched: any[] = [
    {
      day: 'الجمعة',
      times: [],
      state: false
    },
    {
      day: 'السبت',
      times: [],
      state: false
    },
    {
      day: 'الاحد',
      times: [],
      state: false
    },
    {
      day: 'الاثنين',
      times: [],
      state: false
    },
    {
      day: 'الثلاثاء',
      times: [],
      state: false
    },
    {
      day: 'الاربعاء',
      times: [],
      state: false
    },
    {
      day: 'الخميس',
      times: [],
      state: false
    }
  ];

  constructor(  private userService : UserService){
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = this.formatTime(hour, minute);
        this.times.push(time);
      }
    }
  }

  private formatTime(hour: number, minute: number): string {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }

  toggleChanges(day: any) {
    day.state = !day.state;
    if (day.state) {
      day.times.push({ startTime: '', endTime: '' });
    } else {
      day.times = [];
    }
  }
  handelPlus(day: any) {
    const previousTime = day.times[day.times.length - 1];
    const newTime = { startTime: "00:00", endTime: "00:00" };
    day.times.push(newTime);
    previousTime.endTime = previousTime.endTime !== "00:00" ? previousTime.endTime : "00:00";
  }
  handelMinus(day: any, index: number) {
    day.times.splice(index, 1);
  }

  saveUserData(userForm: any) {
    if (userForm.valid) {
      const calendar = this.sched.filter(day => day.state).map(day => {
        return {
          day: day.day,
          times: day.times.filter((time: any) => time.startTime && time.endTime)
        };
      });
      this.userService.setCalendar(calendar)
    }
  }
}