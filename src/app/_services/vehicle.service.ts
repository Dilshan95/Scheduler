import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl='http://localhost:3000/api/';

constructor(private http:HttpClient) { }

getVehicle(){
  return this.http.get(this.baseUrl+'vehicles');
}
getVehiclesOfType(type){
  return this.http.get(this.baseUrl+'vehicles/type?vehicleType='+type);
}
getDriver(vehicleId) {
  return this.http.get(this.baseUrl + 'vehicles/getDriver/find/vehicle/driver/findDriver?vehicle='+vehicleId);
}
}
