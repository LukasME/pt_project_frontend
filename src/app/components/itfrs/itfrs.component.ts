import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-itfrs',
  templateUrl: './itfrs.component.html',
  styleUrls: ['./itfrs.component.scss']
})
export class ITFRSComponent implements OnInit {

  public ITFRS: Expedition = {
    id: 0,
    title: 'Západná Európa 2018',
    description: 'Štvrtý trip',
    states: ['Taliansko, Francúzsko, Španielsko'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
