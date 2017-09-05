import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [{ id: '1' }, { id: '2' }, { id: '3' }];
  constructor() { }

  ngOnInit() {
  }

}
