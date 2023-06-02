import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public arePasswordsEqual(password: string, password2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const passwordValue = formGroup.get(password)?.value;
      const password2Value = formGroup.get(password2)?.value;

      if(passwordValue !== password2Value) {
        formGroup.get(password2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(password2)?.setErrors(null);
      return null;
    }
  }

  public getFieldError(form: FormGroup, field: string): string | null {
    if((!form.controls[field]) && (!form.controls[field].errors)) {
      return null;
    }

    const errors = form.controls[field].errors || {};
    
    for (const key of Object.keys(errors)) {
      switch(key) {
        case "required":
          return "Este campo es obligatorio";
        case "minlength":
          return `Este campo debe tener ${errors['minlength'].requiredLength} caracteres como mínimo`;
        case "email":
          return "Se debe introducir un email válido";
      }
    }

    return null;
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
    return ((form.controls[field].errors) && (form.controls[field].touched));

  }
}