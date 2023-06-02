import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ExercisesRoutingModule } from './exercises-routing.module';

//Components
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { ThreeComponent } from './pages/three/three.component';
import { FourComponent } from './pages/four/four.component';
import { FiveComponent } from './pages/five/five.component';
import { SixComponent } from './pages/six/six.component';
import { SevenComponent } from './pages/seven/seven.component';
import { ChildComponent } from './components/child/child.component';
import { ControllerComponent } from './components/controller/controller.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterTableComponent } from './components/register-table/register-table.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ChildComponent,
    ThreeComponent,
    RegisterFormComponent,
    RegisterTableComponent,
    FourComponent,
    FiveComponent,
    TrafficLightComponent,
    ControllerComponent,
    SixComponent,
    SevenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule,
    CheckboxModule,
    DropdownModule,
    ExercisesRoutingModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule
  ]
})
export class ExercisesModule { }
