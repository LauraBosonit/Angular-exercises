import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExerciseFourService } from '../../services/exercise-four.service';
import { University } from '../../interfaces/university.interface';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  public universities: University[] = [];
  public countrySelected: any;

  constructor(private exerciseFourService: ExerciseFourService) {}

  @ViewChild('search')
  newSearch!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.exerciseFourService.searchUniversitiesByCountry('spain').subscribe(response => {
      this.exerciseFourService.setUniversities(response);
    });
  }

  searchUniversitiesByCountry(country: string) {
    this.countrySelected = country;

    this.newSearch.nativeElement.value = "";
    this.exerciseFourService.searchUniversitiesByCountry(country).subscribe(universities => {
      if(universities.length > 0) {
        this.exerciseFourService.setUniversities(universities);
        this.universities = [...universities];
      }
    })
  }

  searchUniversityByName() {
    setTimeout(() => {
      this.universities = this.exerciseFourService.searchUniversityByName(this.newSearch.nativeElement.value);
      console.log(this.universities);
      
    }, 1500);
  }
  
}
