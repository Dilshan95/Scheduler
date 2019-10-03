import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { Router } from '@angular/router';
import { ReservationsService } from '../_services/reservations.service';
import { TestScheduleComponent } from '../TestSchedule/TestSchedule.component';

@Component({
  selector: 'app-vehicleSelection',
  templateUrl: './vehicleSelection.component.html',
  styleUrls: ['./vehicleSelection.component.css']
})
export class VehicleSelectionComponent implements OnInit {
  selectedVehicleType:any;
  vehicles:any;
  vehicleTypes=["Car","Van","Bus","Cab","Lorry","Motor cycle","Tractor"]; 
  constructor(private vehicleService:VehicleService,private router:Router,private reservationervice:ReservationsService)  { 
    this.viewVehicles();
  }

  ngOnInit() {
  }

  viewVehicles(){

    this.vehicleService.getVehicle()
      .subscribe(
        response=>{
          console.log(response);
           this.vehicles=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

    viewSchedule(vehicle){
  
    let data;
    console.log(vehicle._id);
    this.reservationervice.getAllreservations(vehicle._id)
    .subscribe(response=>{
   
      data=response;
      data.forEach(reservation => {
        
        let Startdate=new Date(reservation.StartTime).getDate();
        let Startmonth=new Date(reservation.StartTime).getMonth();
        let Startyear=new Date(reservation.StartTime).getFullYear();
        let Starthour=new Date(reservation.StartTime).getHours();
        let Startminutes=new Date(reservation.StartTime).getMinutes();

        let Enddate=new Date(reservation.EndTime).getDate();
        let Endmonth=new Date(reservation.EndTime).getMonth();
        let Endyear=new Date(reservation.EndTime).getFullYear();
        let Endhour=new Date(reservation.EndTime).getHours();
        let Endminutes=new Date(reservation.EndTime).getMinutes();


        let startTime=new Date(Startyear,Startmonth,Startdate,Starthour,Startminutes);
        let endTime=new Date(Endyear,Endmonth,Enddate,Endhour,Endminutes);

        reservation.StartTime=startTime;
        reservation.EndTime=endTime;
        reservation.IsBlock=true;
        // console.log(reservation.StartTime);
        // console.log(reservation.EndTime);
      });
      
      console.log("uweifkgeiuwfhueifhbouh");
      TestScheduleComponent.staticData=data;
      console.log(data);
      this.router.navigate(['/schedule',vehicle._id]);
    },(error:Response)=>{   
    })

      // this.router.navigate(['/schedule']);  
    }
    onVehicleTypeSelect(){
      console.log(this.selectedVehicleType);
      this.vehicleService.getVehiclesOfType(this.selectedVehicleType)
      .subscribe(
        response=>{
          console.log(response);
           this.vehicles=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      });
    }

}
