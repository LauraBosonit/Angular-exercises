import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExerciseFiveService } from '../../services/exercise-five.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  @ViewChild('lighterInput')
  lighter!: ElementRef<HTMLInputElement>;

  constructor(private exerciseFiveService: ExerciseFiveService) { }

  get isLighting() {
    return this.exerciseFiveService.getIsLighting();
  }

  setLight(colour: string) {
    if (!this.isLighting) {
      this.exerciseFiveService.setSelectedColour(colour);
      this.exerciseFiveService.ligth$.subscribe();
    }

  }

  switchLight() {
    this.exerciseFiveService.setIsLighting(this.lighter.nativeElement.checked);
    console.log(this.isLighting);
    if (this.isLighting) {
      this.exerciseFiveService.setSelectedColour("");

      this.exerciseFiveService.ligth$
        .subscribe(
          response => {
            console.log(response);
            this.exerciseFiveService.setSelectedColour(response);
          },
          err => console.log(err),
          () => {
            console.log("Terminado");
            this.lighter.nativeElement.checked = false;
            this.exerciseFiveService.setIsLighting(false);
            this.exerciseFiveService.setSelectedColour("");
          });
    }
  }
}
