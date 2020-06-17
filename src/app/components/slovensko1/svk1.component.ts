import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-svk1',
  templateUrl: './svk1.component.html',
  styleUrls: ['./svk1.component.scss']
})
export class SVK1Component implements OnInit {

  // Mock for expeditions
  public SVK1: Expedition = {
    id: 0,
    title: 'Slovensko 2015',
    description: 'Prvý trip',
    states: ['Slovensko'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
