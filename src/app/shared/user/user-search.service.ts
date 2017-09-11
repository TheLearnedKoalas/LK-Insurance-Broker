import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../models/interfaces/user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<IUser[]> {
    return this.http
      .get(`api/users/?username=${term}`)
      .map(response => response.json().data as IUser[]);
  }
}