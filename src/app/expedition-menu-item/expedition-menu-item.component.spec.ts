import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionMenuItemComponent } from './expedition-menu-item.component';

describe('ExpeditionMenuItemComponent', () => {
  let component: ExpeditionMenuItemComponent;
  let fixture: ComponentFixture<ExpeditionMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
