import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExerciseTwoService } from '../../services/exercise-two.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'communication-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public childMessage: string = "CHILD USING OUTPUT EVENT";
  public subscription!: Subscription;

  @Output()
  onNewChildMessage = new EventEmitter<string>();

  @Input()
  newParentMessage: string = "";

  constructor(private exerciseTwoService: ExerciseTwoService) {}

  get parentServiceMessage() {
    return this.exerciseTwoService.parentServiceMessage;
  }

  ngOnInit(): void {
    this.subscription = this.exerciseTwoService.parentSubject$.subscribe( response => this.newParentMessage = response );
  }

  emitNewChildMessage() {
    this.exerciseTwoService.chidServiceMessage = "";
    this.onNewChildMessage.emit(this.childMessage);
  }

  sendMessageObservable() {
    this.exerciseTwoService.chidServiceMessage = "";
    this.exerciseTwoService.setChildSubjectMessage("CHILD USING SUBJECT");
  }
  
  setServiceMessage() {
    this.exerciseTwoService.chidServiceMessage = "CHILD USING SERVICE";
  }
}
