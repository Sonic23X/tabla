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
  ) { }

  getPersons(): Observable<any> {
    return this.http.get(`https://randomapi.com/api/v6tmi4dg?key=R9RI-1Y7E-WIDB-J8NL`);
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  returnPersons(): Person[] {
    return this.persons;
  }
}
