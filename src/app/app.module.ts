import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CheckScheduleComponent } from './checkSchedule/checkSchedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatCheckboxModule, MatNativeDateModule,MatListModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TestScheduleComponent } from './TestSchedule/TestSchedule.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navBar/navBar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { VehicleSelectionComponent } from './vehicleSelection/vehicleSelection.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailsComponent } from './reservationDetails/reservationDetails.component';
import { DateSelectionComponent } from './dateSelection/dateSelection.component';
import { ConfirmDialogComponent } from './confirmDialog/confirmDialog.component';
import {MatDialogModule} from '@angular/material';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';





@NgModule({
   declarations: [
      AppComponent,
      CheckScheduleComponent,
      CheckScheduleComponent,
      TestScheduleComponent,
      HomeComponent,
      LoginComponent,
      NavBarComponent,
      VehicleSelectionComponent,
      ReservationsComponent,
      ReservationDetailsComponent,
      DateSelectionComponent,
      ConfirmDialogComponent,
      DriverLoginComponent,
      MessageDialogComponent
   ],
   imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      ScheduleModule,
      RecurrenceEditorModule,
      DropDownListModule,
      DateTimePickerModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatTabsModule,
      MatTableModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatNativeDateModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      CommonModule,
      MatListModule,
      HttpClientModule,
      MatDialogModule
   ],
   providers: [
      DayService,
      WeekService,
      WorkWeekService,
      MonthService,
      MonthAgendaService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents:[
      ConfirmDialogComponent,
      MessageDialogComponent,//fordialogboxes,
   ],
})
export class AppModule { }
