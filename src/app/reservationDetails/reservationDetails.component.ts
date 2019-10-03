import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { VehicleService } from '../_services/vehicle.service';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-reservationDetails',
  templateUrl: './reservationDetails.component.html',
  styleUrls: ['./reservationDetails.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationId:any;
  reservation:any;
  vehicleID:any;
  data:any;
  driverName:any;
  driverPhoneNumber:any;
  constructor(private route:ActivatedRoute, private router:Router, private reservationsService:ReservationsService, 
    private vehicleService:VehicleService, private dialogService:DialogService ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
        this.reservationId=params.get('reservationId');
        console.log(this.reservationId);
    })
    
this.reservationsService.getOneReservation(this.reservationId)
.subscribe(
  response=>{
    console.log(response);
     this.reservation=response;
   
     this.reservation.StartDate=new Date(this.reservation.StartTime).toDateString();
     this.reservation.EndDate=new Date(this.reservation.EndTime).toDateString();
     
     this.reservation.StartHour=new Date(this.reservation.StartTime).getHours();
     this.reservation.EndHour=new Date(this.reservation.EndTime).getHours();

     this.reservation.StartMin=new Date(this.reservation.StartTime).getMinutes();
     if( this.reservation.StartMin==0){
      this.reservation.StartMinnew=this.reservation.StartMin+'0';
     } else{
      this.reservation.StartMinnew=this.reservation.StartMin;
     }
     this.reservation.EndMin=new Date(this.reservation.EndTime).getMinutes();
     if( this.reservation.EndMin==0){
      this.reservation.EndMinnew=this.reservation.EndMin+'0';
     } else{
      this.reservation.EndMinnew=this.reservation.EndMin;
     }

     this.vehicleID=this.reservation.Vehicle._id;
console.log(this.vehicleID);

     this.vehicleService.getDriver(this.vehicleID)
.subscribe(
  response=>{
    console.log(response);
    this.data=response;
this.driverName=this.data[0].Name;
this.driverPhoneNumber=this.data[0].PhoneNumber;
console.log(this.driverName);
    },
  error=>{
    alert('An unexpected error occurred.');
    console.log(error);
});
     
},
  error=>{
    alert('An unexpected error occurred.');
    console.log(error);
});

  }


  cancelReservation(reservation){

    this.dialogService.openConfirmDialog('Are you sure?')
  .afterClosed().subscribe(res =>{
    console.log(res);
    if(res){

    this.reservationsService.deleteReservation(this.reservationId)
    .subscribe(
      response=>{
      console.log(response)
      this.dialogService.openMessageDialog('Succesfully deleted');
      this.router.navigate(['/myreservations']);
      
   },
      (error: Response)=>{
        if(error.status===404)
        alert('This Reservation is Already Deleted');
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
     
  })
}
});
  }

}
