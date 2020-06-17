import { Component, OnInit } from '@angular/core';
import { Expedition } from './../../shared/models/expedition.model';


@Component({
  selector: 'app-expedition-menu-item',
  templateUrl: './expedition-menu-item.component.html',
  styleUrls: ['./expedition-menu-item.component.scss']
})
export class ExpeditionMenuItemComponent implements OnInit {

  // Mock for expeditions
  public expedition: Expedition = {
    id: 0,
    title: 'Partia ľudí',
    description: 'cestovanie nas baví',
    states: ['.'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
