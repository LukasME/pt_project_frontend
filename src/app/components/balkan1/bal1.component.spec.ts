import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BAL1Component } from './bal1.component';

describe('BAL1Component', () => {
  let component: BAL1Component;
  let fixture: ComponentFixture<BAL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BAL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BAL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
