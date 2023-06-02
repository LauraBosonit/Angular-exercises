import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSevenService {

  private seconds: number = 0;
  private step: number = 1;
  public isRunning: boolean = false;
  public isReseted: boolean = false;
  public countUp: boolean = true;

  constructor() { }

  getSeconds() {
    return this.seconds;
  }

  setSeconds(currentSeconds: number) {
    this.seconds = currentSeconds;
  }

  setStep(value: number) {
    this.step = value; 
  }

  public counter$ = new Observable<number>(subs => {
    const idInterval = setInterval(() => {

      if(!this.isRunning || this.isReseted) {
        if(this.isReseted)  this.isRunning = false;
        subs.complete();
        clearInterval(idInterval);

      } else {
        this.countUp ? this.seconds += this.step : this.seconds -= this.step;
      }
    }, 1000)
  });

}
