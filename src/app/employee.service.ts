import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
/* import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; */

@Injectable({
  providedIn: 'root',
})
//This is an Injectable decorator, It is required to Angular that this service might itself have injected dependencies
//When we want to inject a service into another service, Injectable decorator is a must.
//If we remove it, it will become a plain TS file and it has nothing to do with Angular
export class EmployeeService {
  private _url: string = '/assets/data/employees.json';
  constructor(private http: HttpClient) {}

  /*  getEmployees() {
    return [
      { id: 1, name: 'Andrew', age: 30 },
      { id: 2, name: 'Brandon', age: 25 },
      { id: 3, name: 'Christina', age: 26 },
      { id: 4, name: 'Elena', age: 28 },
    ];
  } */

  getEmployees(): Observable<IEmployee[]> {
    //2nd step
    try {
      return this.http.get<IEmployee[]>(this._url);
    } catch (error) {
      this.errorHandler(error);
    } //1st step
    //.catch(this.errorHandler); //HTTP Error Handling
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
