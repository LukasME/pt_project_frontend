import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IRLComponent } from './irl.component';

describe('IRLComponent', () => {
  let component: IRLComponent;
  let fixture: ComponentFixture<IRLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IRLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IRLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
