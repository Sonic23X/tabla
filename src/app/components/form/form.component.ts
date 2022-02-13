import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() private newRow = new EventEmitter<any>();

  optionSelected: string = '';
  newPerson: Person = {
    name: '',
    age: '',
    gender: '',
    doc: null
  };

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  gender(): void {
    this.newPerson.gender = this.optionSelected;
  }

  savePerson(): void {
    this.personService.addPerson(this.newPerson);
    this.newPerson = {
      name: '',
      age: '',
      gender: '',
      doc: ''
    };
    this.newRow.emit();
  }

}
