import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class ClientFormComponent implements OnInit {


  clientTypes = [{ name: 'физическо лице' }, { name: 'юридическо лице' }];

  constructor() { }

  @Input()
  client = {
    clientType: '',
    id: '',
    name: '',
    adress: '',
  };


  CreateClient() {
  
  }

  FindClient() {

  }

  ngOnInit() {
  }

}
