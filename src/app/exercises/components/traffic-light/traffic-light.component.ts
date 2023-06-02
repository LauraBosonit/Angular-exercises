import { Component, OnInit } from '@angular/core';
import { ExerciseFiveService } from '../../services/exercise-five.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  constructor(private exerciseFiveService: ExerciseFiveService) {}

  get selectedColour() {
    return this.exerciseFiveService.getSelectedColour();
  }

}
