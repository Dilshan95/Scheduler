import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../_services/reservations.service';
import { TestScheduleComponent } from '../TestSchedule/TestSchedule.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router,private reservationervice:ReservationsService) { }

  ngOnInit() {
  }


}
