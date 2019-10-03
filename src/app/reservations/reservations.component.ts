import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../_services/reservations.service';
import { AuService } from '../_services/au.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  studentId=this.authService.decodedToken.id ;
  constructor(private reservationsService: ReservationsService, private authService:AuService, private router:Router ) { 
    
    this.viewReservations(this.studentId);
  }

  ngOnInit() {
  }
  viewReservations(studentId){
    // console.log(this.studentId);
    this.reservationsService.getStudentReservations(studentId)
    .subscribe(
      response=>{
        console.log(response);
         this.reservations=response;
         this.reservations.forEach(reservation => {
          reservation.StartDay=new Date(reservation.StartTime).toDateString();
  
          reservation.EndDay=new Date(reservation.EndTime).toDateString();
       
        });
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    });
  }
  

  viewReservation(reservation){
    console.log(reservation._id)
    this.router.navigate(['/viewReservation',reservation._id]);
  }
}
