import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestScheduleComponent } from './TestSchedule/TestSchedule.component';
import { VehicleSelectionComponent } from './vehicleSelection/vehicleSelection.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailsComponent } from './reservationDetails/reservationDetails.component';
import { DateSelectionComponent } from './dateSelection/dateSelection.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';



export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'schedule/:vehicleID', component: TestScheduleComponent },
    { path: 'vehicleSelection', component: VehicleSelectionComponent },
    { path: 'myreservations', component: ReservationsComponent },
    { path: 'viewReservation/:reservationId', component: ReservationDetailsComponent },
    { path: 'dateSelection', component: DateSelectionComponent },
    { path: 'driverLogin', component: DriverLoginComponent},
    
    { path: '', component: LoginComponent }
  ];