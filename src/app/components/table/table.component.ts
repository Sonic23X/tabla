import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(value => {
      let persons = value.results;

      persons.forEach((person: any) => {
        let newPerson: Person = {
          name: person.name,
          age: person.age,
          gender: person.gender,
          doc: person.doc
        };
        this.persons.push(newPerson);
        this.personService.addPerson(newPerson);
      });
    });

    //Obtener las que tenemos en storage
    this.persons.concat(this.personService.returnPersons());
  }

  update(): void {
    this.persons = this.personService.returnPersons();
  }

}
