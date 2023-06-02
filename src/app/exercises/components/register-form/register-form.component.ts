import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { User } from '../../interfaces/user.interface';
import { ExerciseThreeService } from '../../services/exercise-three.service';
import { v4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({
    userName: ["", [Validators.required, Validators.minLength(4)]],
    password: ["", [Validators.required, Validators.minLength(4)]],
    password2: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    subscription: [""],
    country: [],
    city: ["", [Validators.required, Validators.minLength(3)]]
  }, {
    validators: [
      this.validatorService.arePasswordsEqual('password', 'password2')
    ]
  });

  public countries: any[] = [];
  public edit: boolean = false;
  public user!: User;

  constructor(
    private formBuilder: FormBuilder, 
    private validatorService: ValidatorService, 
    private exerciseThreeService: ExerciseThreeService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.countries = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]

    this.activatedRoute.params.subscribe(response => {
      if(response["id"]) {
        const user = this.exerciseThreeService.getUserById(response["id"]);
        
        if(user !== null) {
          this.edit = true;
          this.user = user
          this.registerForm.reset(user);
        }
      }
    })
  }

  getFieldError(field: string): string | null {
    return this.validatorService.getFieldError(this.registerForm, field);
  }

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.registerForm, field);
  }

  updateTable() {
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { userName, password, password2, email, subscription, country, city } = this.registerForm.value;    

    console.log({country});
    

    if(this.edit) {
      const editedUser: User = {
        id: this.user.id,
        userName,
        password,
        password2,
        email,
        subscription: (subscription ? true : false),
        country: country["name"] ? country.name : country,
        city
      }

      this.exerciseThreeService.editUser(editedUser);
      this.edit = false;
      this.router.navigate(["/exercises/three/register"])
    } else {
      const newUser: User = {
        id: v4(),
        userName,
        password,
        password2,
        email,
        subscription: (subscription == null || subscription.length <= 0? false : true),
        country: country,
        city
      }
      this.exerciseThreeService.addToUsers(newUser);
    }

  }

}
