import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-bal1',
  templateUrl: './bal1.component.html',
  styleUrls: ['./bal1.component.scss']
})
export class BAL1Component implements OnInit {

  public BAL1: Expedition = {
    id: 0,
    title: 'Balkan 2016',
    description: 'Druhý trip',
    states: ['Rumunsko, Srbsko, Čierna Hora'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
