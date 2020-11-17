import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';


@Component({
  selector: 'app-nor',
  templateUrl: './nor.component.html',
  styleUrls: ['./nor.component.scss']
})
export class NORComponent implements OnInit {

  public NOR: Expedition = {
    id: 0,
    title: 'Nórsko 2017',
    description: 'Tretí trip',
    states: ['Nórsko'],
    dateFrom: new Date(),
    dateTo: new Date(),
    photoUrls: [''],
  };

  constructor() {

  }

  ngOnInit() {
  }

}
