import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { InteractionService } from '../interaction.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

  /* Style Binding */
  /*  template: `
    <h2>Welcome {{ name }}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: [], */

  /* Event Binding */
  /*  template: `
    <h2>Welcome {{ name }}</h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting = 'Welcome Ashwin'">Greet 2</button>

    {{ greeting }}
  `,
  styles: [], */
})
//$event gives us all the information about the DOM event that was raised
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public name = 'Ashwin';
  /* public siteUrl = window.location.href;
    greetUser() {
    return 'Bonjour ' + this.name;
  } */
  /* public myId = 'testId'; */
  /* public successClass = 'text-success';
  public specialClass = 'text-special';
  public dangerClass = 'text-danger';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  }; */
  /*   public hasError = false;
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  }; */
  /*  public greeting = '';
  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  } */
  /*   logMessage(value) {
    console.log(value);
    //Here, value is what you enter in the input field
  } */
  /* public username = ''; */
  /*  displayName = true; */
  /* public color = 'red'; */
  /* public colors = ['red', 'blue', 'green', 'yellow']; */

  /* Component Interaction */
  /* 
  constructor(private _interactionService: InteractionService) {}

  askQuestion() {
    this._interactionService.sendStudMessage('What is Ice? teacher');
  }
  askMarks() {
    this._interactionService.sendStudMessage("What's my marks teacher?");
  }

  ngOnInit() {
    this._interactionService.teacherMessage$.subscribe((message) => {
      if (message === 'Good Morning') {
        alert('Good Morning Teacher');
      } else if (message === 'Well Done') {
        alert('Thank you teacher');
      }
    });
  }
 */

  /* Pipes */
  /* 
  public message = "Welcome to Ashwin's world";
  public person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  public date = new Date();
   */

  /* Services */

  /*   public employees = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  } */

  /* HTTP and Observables */
  /* 
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    ); //3rd & 4th step
  } */

  /* Routing & Navigation */

  
}
