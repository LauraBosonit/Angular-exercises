import { Component } from '@angular/core';
import { ExerciseSevenService } from '../../services/exercise-seven.service';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent {
  constructor(private exerciseSevenService: ExerciseSevenService) { }

  get seconds() {
    return this.exerciseSevenService.getSeconds();
  }

  startCounter() {
    if (!this.exerciseSevenService.isRunning) {
      this.exerciseSevenService.isRunning = true;
      this.exerciseSevenService.isReseted = false;
      this.exerciseSevenService.counter$.subscribe(response => {
        this.exerciseSevenService.setSeconds(response);
      })
    }
  }

  pauseCounter() {
    this.exerciseSevenService.isRunning = false;
  }

  resetCounter() {
    this.exerciseSevenService.setSeconds(0);
    this.exerciseSevenService.isReseted = true;
  }

  setCountUp(value: boolean) {
    this.exerciseSevenService.countUp = value;
  }

  setSeconds(seconds: string) {
    this.exerciseSevenService.setSeconds(parseInt(seconds));
  }

  setStep(step: string) {
    this.exerciseSevenService.setStep(parseInt(step));
  }
}
