import { Component, OnInit } from '@angular/core';
import { ExerciseTwoService } from '../../services/exercise-two.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  public receivedMessage: string = "";
  public parentMessage: string = "";
  public subscription!: Subscription;

  constructor(private exerciseTwoService: ExerciseTwoService)  {}

  ngOnInit(): void {
    this.subscription = this.exerciseTwoService.childSubject$.subscribe(response => this.receivedMessage = response);
  }

  get chidServiceMessage() {
    return this.exerciseTwoService.chidServiceMessage;
  }

  onNewChildMessage(newChildMessage: string) {
    this.receivedMessage = newChildMessage;
  }

  sendParentMessage() {
    this.exerciseTwoService.parentServiceMessage = "";
    this.parentMessage = "PARENT USING INPUT PROPERTY";
  }

  sendMessageObservable() {
    this.exerciseTwoService.parentServiceMessage = "";
    this.exerciseTwoService.setParentSubjectMessage("PARENT USING SUBJECT");
  }

  setServiceMessage() {
    this.exerciseTwoService.parentServiceMessage = "PARENT USING SERVICE";
  }

}
