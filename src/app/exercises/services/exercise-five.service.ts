import { Injectable } from '@angular/core';
import { Observable, delay, from, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseFiveService {

  private selectedColour: string = "";
  private isLighting: boolean = false;
  private colours: string[] = ["red", "yellow", "green"];

  constructor() { }

  getSelectedColour() {
    return this.selectedColour;
  }

  getIsLighting() {
    return this.isLighting;
  }

  setSelectedColour(colour: string) {
    this.selectedColour = colour;
  }

  setIsLighting(value: boolean) {
    this.isLighting = value;
  }

  public ligth$ = new Observable<string>(subs => {
    if (this.isLighting) {
      let counter = 1000;

      this.colours.forEach(colour => {
        setTimeout(() => {
          subs.next(colour);
        }, counter);
        counter += 1000;
      });

      setTimeout(() => {
        subs.complete();
      }, 4000);

    } else {
      if (this.selectedColour) {
        subs.next(this.selectedColour);
      }
    }
  })
}
