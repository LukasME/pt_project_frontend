import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NORComponent } from './nor.component';

describe('NORComponent', () => {
  let component: NORComponent;
  let fixture: ComponentFixture<NORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
