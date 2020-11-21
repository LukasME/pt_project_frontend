import { Component, OnInit, Input} from '@angular/core';
import { Expedition } from './../../shared/models/expedition.model';
import { DatePipe } from '@angular/common';
import { SafeHtmlPipe } from './../../shared/pipes/safe-html.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expedition-preview',
  templateUrl: './expedition-preview.component.html',
  styleUrls: ['./expedition-preview.component.scss']
})
export class ExpeditionPreviewComponent implements OnInit {

  @Input() expedition: Expedition = {
    id: 0,
    slug: 'empty',
    title: '',
    description: '',
    states: [],
    dateFrom: new Date(),
    dateTo: new Date(),
    previewPhotoUrls: [''],
    photoUrls: [''],
    contentHTML: ''
  };

  public datepipe: DatePipe = new DatePipe('en-US');

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  goToExpedition(): void {
    const navigationDetails: string[] = ['/expedition'];

    navigationDetails.push(this.expedition.slug);

    this.router.navigate(navigationDetails);
  }

}
