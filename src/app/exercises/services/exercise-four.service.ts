import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { University } from '../interfaces/university.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseFourService {

  private baseUrl = "http://universities.hipolabs.com/search";
  private universities: University[] = [];

  constructor(private httpClient: HttpClient) { }

  searchUniversitiesByCountry(country: string): Observable<University[]> {
    return this.httpClient.get<University[]>(`${this.baseUrl}?country=${country}`);
  }

  searchUniversityByName(name: string) {
    return [...this.universities.filter(university => university.name.toLowerCase().includes(name.toLowerCase()))]
  }

  setUniversities(foundedUniversities: University[]) {
    this.universities = foundedUniversities;
    console.log(this.universities); 
  }
}
