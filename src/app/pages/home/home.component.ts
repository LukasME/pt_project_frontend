import { Component, OnInit } from '@angular/core';
import { Content } from '../../shared/models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public content: Content[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
