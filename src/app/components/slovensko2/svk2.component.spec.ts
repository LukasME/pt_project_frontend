import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVK2Component } from './svk2.component';

describe('SVK2Component', () => {
  let component: SVK2Component;
  let fixture: ComponentFixture<SVK2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVK2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVK2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
