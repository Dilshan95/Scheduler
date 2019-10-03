import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AuService } from '../_services/au.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  errors=false;
  constructor(private authservice:AuService ,private router: Router) { }
  
  ngOnInit() {
  }
  login(){
    // this.router.navigate(['/home']);
    console.log(this.model);
    this.authservice.login(this.model).subscribe(next=>{
      this.router.navigate(['/dateSelection']);
    },(error:Response)=>{
      
      if(error.status===400){
        this.errors= true;
        console.log(error);
      }
      else alert('Unexpected error found');
    });
    
  }
}
