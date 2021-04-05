import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empser:EmployeeService) { }

  ngOnInit(): void {
  }
  storeUser(empRef:any){
    console.log(empRef);
    this.empser.storeEmployee(empRef);
  }

}