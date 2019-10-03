import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { ReservationsService } from '../_services/reservations.service';
import { AuService } from '../_services/au.service';
import { ActivatedRoute, Router } from '@angular/router';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
'en-US':{
  'schedule':{
'saveButton':'',
'cancelButton':'Close',
'newEvent':'New Reservation',
  }
}
})


@Component({
  selector: 'app-TestSchedule',
  templateUrl: './TestSchedule.component.html',
  styleUrls: ['./TestSchedule.component.css']
})
export class TestScheduleComponent implements OnInit {
  reservationSend:any;
  reservationForm: FormGroup;
  public static staticData: any;
  vehicleId:any;
  data:any
  studentId=this.authService.decodedToken.id ;
  HODMail:any;
  constructor(private route:ActivatedRoute,private fb: FormBuilder,
     private reservationservice:ReservationsService,private authService:AuService,private router: Router) { }

  ngOnInit() {
    this.createReservationForm();
    this.getHODMail();
    this.data=TestScheduleComponent.staticData;
    this.eventObject.dataSource=this.data;
    console.log(this.data);
    this.route.paramMap
    .subscribe(params=>{
        this.vehicleId=params.get('vehicleID');
        console.log(this.vehicleId);
    })
  }


  createReservationForm() {
    this.reservationForm = this.fb.group({
      StartTime:[''],
      EndTime: [''],
      From: [''],
      To: [''],
      Distance: [''],
      Purpose: [''],
      Passengers: [''],
      PhoneNumber: [''],
      Lecturer: [''],
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

    this.reservationForm.patchValue({Vehicle:this.vehicleId});
    this.reservationForm.patchValue({HODConfirmation:false});
    this.reservationForm.patchValue({DeanConfirmation:false});
    this.reservationForm.patchValue({VCConfirmation:false});
    this.reservationForm.patchValue({ReservationConfirmation:false});
    this.reservationForm.patchValue({NewReservation:true});
    this.reservationForm.patchValue({student:this.studentId});

    let reservation = Object.assign({}, this.reservationForm.value);
   
    console.log(reservation);
    // console.log(this.data);
    // this.eventObject={
    //   dataSource:this.data
    //     }
    

      this.reservationservice.createReservation(reservation).subscribe(next=>{
        this.reservationSend=next;
        let email={
          emailAddress:this.HODMail,
          url:"http://localhost:4202/hod/"+this.reservationSend._id,
        }
        this.reservationservice.sendEmail(email)
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
        this.router.navigate(['/vehicleSelection']);
     
      },(error:Response)=>{
        
        if(error.status===400){
          alert('Reservation exsists');
        }
        else alert('Unexpected error found');
      })
    
     
    
    

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

  public dateParser(data:string){
    // return new Date(data);
  }
   
    
  private eventData: DataManager = new DataManager({
    // url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor:new WebApiAdaptor,
    crossDomain:true
  });

  title = 'scheduler-new'; 
  //public setDate:Date =new Date(2019,5,5);
 
  
   public eventObject: EventSettingsModel={
     dataSource: TestScheduleComponent.staticData
   }
  
   addEvent(){
     console.log("success");
    //  console.log(this.data);
   }
}