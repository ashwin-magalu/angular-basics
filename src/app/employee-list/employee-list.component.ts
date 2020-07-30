import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
//Component Decorator lets angular know that this class may have dependencies and might make use of dependency injection system
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) {
    //Declare the service as the dependency in the class that needs it.
  }

  ngOnInit() {
    //It is a life cycle hook
    //this.employees = this._employeeService.getEmployees();

    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    ); //3rd and 4th step
    //this get method returns an observable, so to receive data, we need to subscribe, once subscribed, data arrives asynchronously
    //we assign that  data to our class property using fat arrow syntax
  }
}
