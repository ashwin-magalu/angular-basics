import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  /* Component Interaction */

  private _teacherMessageSource = new Subject<string>();
  teacherMessage$ = this._teacherMessageSource.asObservable();

  private _studentMessageSource = new Subject<string>();
  studentMessage$ = this._studentMessageSource.asObservable();

  constructor() {}

  sendMessage(message: string) {
    this._teacherMessageSource.next(message);
  }

  sendStudMessage(studMessage: string) {
    this._studentMessageSource.next(studMessage);
  }
}
