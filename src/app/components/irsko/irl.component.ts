import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-irl',
  templateUrl: './irl.component.html',
  styleUrls: ['./irl.component.scss']
})
export class IRLComponent implements OnInit {

  // Mock for expeditions
  public IRL: Expedition = {
    id: 0,
    title: 'Írsko 2019',
    description: 'Piatý trip',
    states: ['Írsko'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
