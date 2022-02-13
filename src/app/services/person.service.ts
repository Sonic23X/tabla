import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[] = [];

  constructor
  (
    private http: HttpClient,
  ) {
    var _localStorage: string = localStorage.getItem('persons') as string;
    if (_localStorage)
      this.persons = JSON.parse(_localStorage);
  }

  getPersons(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }

  addPerson(person: Person): void {
    this.persons.push(person);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }

  returnPersons(): Person[] {
    return this.persons;
  }
}
