import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVK1Component } from './svk1.component';

describe('SVK1Component', () => {
  let component: SVK1Component;
  let fixture: ComponentFixture<SVK1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVK1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVK1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
