import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-expedition-menu-item',
  templateUrl: './expedition-menu-item.component.html',
  styleUrls: ['./expedition-menu-item.component.scss']
})
export class ExpeditionMenuItemComponent implements OnInit {

  /*
  interface ExpeditionMenuItem  {
    label: string;
    dateFrom: Date;
    dateTo: Date;
    states: string[];
    photoUrl: string;
  }

  expeditions: ExpeditionMenuItem = [
    {
      label: '',
      dateFrom: 
      dateTo:
      states: ['']
    }
  ]
*/

  constructor() {

  }

  ngOnInit() {
  }

}
