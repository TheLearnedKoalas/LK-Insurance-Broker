import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { UserSearchService } from '../../shared/user/user-search.service';
import { IUser } from '../../models/interfaces/user';

@Component({
  templateUrl: './admin-pane.component.html',
  styleUrls: ['./admin-pane.component.css'],
  providers: [UserSearchService]
})
export class AdminPaneComponent implements OnInit {
  users: Observable<IUser[]>;
  private searchTerms = new Subject<string>();
  constructor(private userSearchService: UserSearchService, private router: Router) { }

  ngOnInit() {
    this.users = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userSearchService.search(term)
        // or the observable of empty users if there was no search term
        : Observable.of<IUser[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<IUser[]>([]);
      });
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(user: IUser): void {
    let link = ['/detail', user.id];
    this.router.navigate(link);
  }

}