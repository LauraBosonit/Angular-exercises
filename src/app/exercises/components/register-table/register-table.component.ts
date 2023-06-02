import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { ExerciseThreeService } from '../../services/exercise-three.service';

@Component({
  selector: 'register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.css']
})
export class RegisterTableComponent {
  public users: User[] = [];
  
  constructor(private exerciseThreeService: ExerciseThreeService) {}

  get allUsers() {
    return this.exerciseThreeService.allUsers;
  }

  deleteUser(id: string) {
    this.exerciseThreeService.deleteUser(id);
  }
}
