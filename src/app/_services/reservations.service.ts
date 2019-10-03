import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  baseUrl = 'http://localhost:3000/api/';

constructor(private http: HttpClient) { }

getAllreservations(vehicleNo){
  return this.http.get(this.baseUrl + 'reservations?vehicleNo='+vehicleNo);
}
createReservation(reservation){
  return this.http.post(this.baseUrl + 'reservations',reservation);
}

getStudentReservations(studentId){
  return this.http.get(this.baseUrl + 'reservations/studentReservations/student?studentId='+studentId);
}
getOneReservation(id){
  return this.http.get(this.baseUrl+'reservations/'+id);
}

sendEmail(email)
{
  return this.http.post(this.baseUrl+'email',email);
}

getAvailableVehicles(checkVehicle){
  return this.http.post(this.baseUrl+'reservations/check',checkVehicle);
}

deleteReservation(reservation){
  return this.http.delete(this.baseUrl + 'reservations/'+ reservation)
}


}
