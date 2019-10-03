import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { TestScheduleComponent } from '../TestSchedule/TestSchedule.component';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route : Router,private dialogService:DialogService ) { }

  ngOnInit() {
  }

  vehicleSelection(){
    this.route.navigate(['/vehicleSelection']);
  }
  
  myReservations(){
    this.route.navigate(['/myreservations']);
  }

  dateSelection(){
    this.route.navigate(['/dateSelection']);
  }

  logout(){


    this.dialogService.openConfirmDialog('Are you sure you want to log out?')
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
      
        localStorage.removeItem('token');
        this.route.navigate(['']);
   }
  });  
  }

}
