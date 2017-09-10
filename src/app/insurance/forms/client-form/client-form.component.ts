import { Validator } from 'validator.ts/Validator';
import { Client } from './../../models/client';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ClientService } from '../../services/client.service';
import { Validators, FormGroup, FormControl, FormGroupName, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class ClientFormComponent implements OnInit {
  @Output()
  loadContent = new EventEmitter<object>();
  clientTypes = [{ name: 'физическо лице' }, { name: 'юридическо лице' }];

  public clientType = new FormControl(this.clientTypes[0].name, [Validators.required]);

  public name = new FormControl('', []);

  public id= new FormControl('', []);

  public adress = new FormControl('', []);

  public client: FormGroup;

  constructor(private clientService: ClientService) { }

  // @Output()
  // loadContent = new EventEmitter<object>();

  CreateClient() {
    // console.log(this.client.value);
    this.clientService.create(this.client.value)
      .subscribe(res => {
        this.loadContent.emit(this.client.value);
      });
  }

  FindClient() {

  }

  ngOnInit() {
    this.client = new FormGroup({
      clientType: this.clientType,
      name: this.name,
      id: this.id,
      adress: this.adress
    });
  }

}
