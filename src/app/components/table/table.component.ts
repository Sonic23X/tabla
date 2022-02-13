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
    //Get previusly persons
    this.persons = this.personService.returnPersons();

    //Get of Api
    this.personService.getPersons().subscribe(value => {
      let persons = value.results;

      persons.forEach((person: any) => {
        let newPerson: Person = {
          name: person.name,
          age: person.age,
          gender: person.gender,
          doc: person.doc
        };

        //Save on storage
        this.personService.addPerson(newPerson);
      });
    });
  }

  update(): void {
    this.persons = this.personService.returnPersons();
  }

}
