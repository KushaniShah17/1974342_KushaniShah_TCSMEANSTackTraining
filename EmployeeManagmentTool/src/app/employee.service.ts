import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  storeEmployee(login:any)
  {
    this.http.post("http://localhost:3000/emp", login)
    .subscribe(result=>console.log(result), 
               error=>console.log(error));
  }
}
