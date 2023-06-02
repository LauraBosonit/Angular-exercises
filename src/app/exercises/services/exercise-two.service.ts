import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseTwoService {

  constructor() { }

  public parentSubject$ = new Subject<string>();
  public childSubject$ = new Subject<string>();
  public parentServiceMessage: string = "";
  public chidServiceMessage: string = "";

  setChildSubjectMessage(message: string) {
    this.childSubject$.next(message);
  }

  setParentSubjectMessage(message: string) {
    this.parentSubject$.next(message);
  }

}
