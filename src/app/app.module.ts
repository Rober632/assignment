import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TypeSelectionComponent } from './components/type-selection/type-selection.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { StoreModule } from '@ngrx/store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    CalendarComponent,
    TypeSelectionComponent,
    AvailabilityComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    FormsModule

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
