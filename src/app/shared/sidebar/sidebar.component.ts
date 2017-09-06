import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  loadContent = new EventEmitter<string>();

  onLoadContent(value: string) {
    this.loadContent.emit(value);
  }

  constructor() { }
  // tslint:disable-next-line:member-ordering
  @Input()
  contents;

  // tslint:disable-next-line:member-ordering
  @Input()
  header;

  ngOnInit() {
  }

}
