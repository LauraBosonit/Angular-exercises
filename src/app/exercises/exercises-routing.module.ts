import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { ThreeComponent } from './pages/three/three.component';
import { FourComponent } from './pages/four/four.component';
import { FiveComponent } from './pages/five/five.component';
import { SixComponent } from './pages/six/six.component';
import { SevenComponent } from './pages/seven/seven.component';

const routes: Routes = [
  { path: "", children: [
    { path: "one", component: OneComponent },
    { path: "two", component: TwoComponent },
    { path: "three", children: [
      { path: "register", component: ThreeComponent},
      { path: "edit/:id", component: ThreeComponent },
      { path: "**", redirectTo: "register" }
    ] },
    { path: "four", component: FourComponent },
    { path: "five", component: FiveComponent },
    { path: "six", component: SixComponent },
    { path: "seven", component: SevenComponent },
    { path: "**", redirectTo: "one" }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
