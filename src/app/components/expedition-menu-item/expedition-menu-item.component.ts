import { Component, OnInit } from '@angular/core';
import { Expedition } from './../../shared/models/expedition.model';
 
@Component({
  selector: 'app-menu',
  templateUrl: './expedition-menu-item.component.html',
  styleUrls: ['./expedition-menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  // Mock for expeditions
  public expedition: Expedition = {
    id: 0,
    title: 'IT-FR-ES Trip',
    description: 'Toto je popis nášej cesty po západnej Európe v roku 2018',
    states: ['Taliansko', 'Francúzsko', 'Španielsko'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
