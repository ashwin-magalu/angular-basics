import { Component, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root', //It is a custom html tag, present in index.html file
  templateUrl: './app.component.html', //this is the template html for selector
  styleUrls: ['./app.component.css'], //this is the template css for selector
})
export class AppComponent /* implements OnInit  */ {
  title = 'hello-ashwin';

  /* Component Interaction */
  /*
  constructor(private _interactionService: InteractionService) {}

  greetStudent() {
    this._interactionService.sendMessage('Good Morning');
  }
  appreciateStudent() {
    this._interactionService.sendMessage('Well Done');
  }

   ngOnInit() {
    this._interactionService.studentMessage$.subscribe((studMessage) => {
      if (studMessage === 'What is Ice? teacher') {
        alert('Ice is a solid state of water');
      } else if (studMessage === "What's my marks teacher?") {
        alert('Ashwin, your marks is : 12/15 ');
      }
    });
  } 
  */


}
