import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-svk2',
  templateUrl: './svk2.component.html',
  styleUrls: ['./svk2.component.scss']
})
export class SVK2Component implements OnInit {

  // Mock for expeditions
  public SVK2: Expedition = {
    id: 0,
    title: 'Slovensko 2020',
    description: 'Šiesty trip',
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
