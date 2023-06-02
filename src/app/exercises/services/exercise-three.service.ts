import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseThreeService {

  constructor() { }

  private users: User[] = [
    {
      id: "343ajhbdgha-kjhsabdgjsabd-4gf56df4hg",
      userName: "Adelina Ramon",
      password: "1234",
      password2: "1234",
      email: "adelina.ramon@mail.com",
      subscription: true,
      country: "Portugal",
      city: "Lisboa"
    },
    {
      id: "354dfg4dfs-57ds4f5s-56dsf4sadhs4f",
      userName: "Pablo Alonso",
      password: "1234",
      password2: "1234",
      email: "pablo.alonso@mail.com",
      subscription: false,
      country: "España",
      city: "Madrid"
    },
    {
      id: "64gr6daf5g44-564EF6DS4G-d5s4fg5fdsgg",
      userName: "Yaiza Arias",
      password: "1234",
      password2: "1234",
      email: "yaiza.arias@mail.com",
      subscription: true,
      country: "Rumanía",
      city: "Bucarest"
    },
    {
      id: "afs6s4dgf5af4-df6ga56g4sdf54-56ds4g54sdf",
      userName: "Andrés Tejedor",
      password: "1234",
      password2: "1234",
      email: "andres@correo.com",
      subscription: false,
      country: "Francia",
      city: "Marsella"
    }
  ];

  get allUsers() {
    return this.users;
  }

  addToUsers(user: User) {
    if(user) {
      this.allUsers.push(user);
    }
  }

  editUser(user: User) {    
    const index = this.users.findIndex(storagedUser => storagedUser.id === user.id);
    console.log({index});
    console.log(user);
    
    
    if(index >= 0) {
      console.log("TIENE INDEX");
      
      this.users.splice(index, 1, user);
    }    

    console.log(this.users);
    
  }

  getUserById(id: string): User | null {
    const user = this.users.find(user => user.id === id);

    return user ? user : null;
  }

  deleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }

}
