import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionPresentationComponent } from './expedition-presentation.component';

describe('ExpeditionPresentationComponent', () => {
  let component: ExpeditionPresentationComponent;
  let fixture: ComponentFixture<ExpeditionPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
