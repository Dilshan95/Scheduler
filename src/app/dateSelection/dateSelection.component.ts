import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationsService } from '../_services/reservations.service';
import { AuService } from '../_services/au.service';
import { Router } from '@angular/router';
import { dateSelectionFormValidators } from './dateSelectionFormValidator';

@Component({
  selector: 'app-dateSelection',
  templateUrl: './dateSelection.component.html',
  styleUrls: ['./dateSelection.component.css']
})
export class DateSelectionComponent implements OnInit {
  reservationSend:any;
  selectedVehicleType:any;
  vehicleTypes=["Car","Van","Bus","Cab","Lorry","Motor cycle","Tractor"]; 
  dateSelectionForm:FormGroup;
  reservationForm:FormGroup;
  vehicles:any;
  data:any;
  FormVisible:any;
  vehicleId:any;
  studentId=this.authService.decodedToken.id ;
  HODMail:any;

  constructor(private fb: FormBuilder,private reservationService:ReservationsService, 
    private authService:AuService, private router: Router) { }

  ngOnInit() {
this.DateSelection();
this.createReservationForm();
this.getHODMail();
  }
  DateSelection() {
    this.dateSelectionForm = this.fb.group({
      vehicleType: ['',Validators.required],
      StartTime:['',Validators.required],
      EndTime: ['',Validators.required],
    });
  }
  Go(){
    let starttime = new Date(this.dateSelectionForm.value.StartTime);
    let endtime = new Date(this.dateSelectionForm.value.EndTime);
  if(starttime<endtime){
    let checkVehicle = Object.assign({}, this.dateSelectionForm.value);
    // console.log(checkVehicle);
    this.reservationService.getAvailableVehicles(checkVehicle)
    .subscribe(
      response=>{
        console.log(response);
         this.data=response;
         this.vehicles=this.data.vehicles;
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }); 
  }
  else{
    alert("Enter valid date and time.");
  }
}

makeReservation(vehicle){
  this.FormVisible=true;
  console.log(vehicle._id);
this.reservationForm.patchValue({StartTime:this.dateSelectionForm.value.StartTime});
this.reservationForm.patchValue({EndTime:this.dateSelectionForm.value.EndTime});
this.reservationForm.patchValue({Vehicle:vehicle._id});
}


createReservationForm() {
  this.reservationForm = this.fb.group({
    StartTime:[''],
    EndTime: [''],
    From: [''],
    To: [''],
    Distance: [''],
    Purpose: [''],
    Passengers: ['',dateSelectionFormValidators.PassengersValidator],
    PhoneNumber: ['',dateSelectionFormValidators.PhoneNumberValidator],
    Lecturer: ['',dateSelectionFormValidators.NameValidator],
    Description: [''], 
    Vehicle: [''], 
    HODConfirmation: [''], 
    DeanConfirmation: [''], 
    VCConfirmation: [''], 
    ReservationConfirmation: [''], 
    student: [''], 
    NewReservation: ['']

  });
}



submit(){
  let starttime = new Date(this.reservationForm.value.StartTime);
  let endtime = new Date(this.reservationForm.value.EndTime);
  if(starttime<endtime){
    this.reservationForm.patchValue({HODConfirmation:false});
    this.reservationForm.patchValue({DeanConfirmation:false});
    this.reservationForm.patchValue({VCConfirmation:false});
    this.reservationForm.patchValue({ReservationConfirmation:false});
    this.reservationForm.patchValue({NewReservation:true});
    this.reservationForm.patchValue({student:this.studentId});
  
    let reservation = Object.assign({}, this.reservationForm.value);
    console.log(reservation);
    this.reservationService.createReservation(reservation).subscribe(next=>{
      this.reservationSend=next;
        let email={
          emailAddress:this.HODMail,
          url:"http://localhost:4202/hod/"+this.reservationSend._id,
        }
        this.reservationService.sendEmail(email)
        .subscribe(
          response=>{
            console.log(response);       
        },
          error=>{
            alert('An unexpected error occurred.');
            console.log(error);
            
        })
  
        console.log(next);
        console.log(email);
      alert("Succesfully created Reservation");
      this.router.navigate(['/home']);
   
    },(error:Response)=>{
      
      if(error.status===400){
        alert('Reservation exsists');
      }
      else alert('Unexpected error found');
    })
  }
  else{
    alert("Enter valid date and time.");
  }
}


getHODMail(){
  this.authService.getUserDetails(this.studentId).subscribe(response=>{
    this.data=response;
    this.HODMail = this.data.department.HODMail;
},
error=>{
  alert('An unexpected error occurred.');
  console.log(error);
});
}


}
