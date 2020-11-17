import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITFRSComponent } from './itfrs.component';

describe('ITFRSComponent', () => {
  let component: ITFRSComponent;
  let fixture: ComponentFixture<ITFRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITFRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITFRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
