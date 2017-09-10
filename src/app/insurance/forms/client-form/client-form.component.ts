import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class ClientFormComponent implements OnInit {


  clientTypes = [{ name: 'физическо лице' }, { name: 'юридическо лице' }];

  constructor(private clientService: ClientService) { }

  @Input()
  client = {
    clientType: '',
    id: '',
    name: '',
    adress: '',
  };

  @Output()
  loadContent = new EventEmitter<object>();

  CreateClient() {
    // this.clientService.createClient(this.client)
    //   .subscibe(res => {
    //     this.loadContent.emit(res);
    //   });
  }

  FindClient() {

  }

  ngOnInit() {
  }

}
