import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuService {

constructor(private http: HttpClient) { }
jwtHelper=new JwtHelperService();
decodedToken:any;
baseUrl = 'http://localhost:3000/api/';

login(model: any) {
  return this.http.post(this.baseUrl + 'studentLogin', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
       console.log(this.decodedToken);
      }
    })
  );
}
getUserDetails(id){
  return this.http.get(this.baseUrl + 'student/'+id);
}

}
