import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTanksComponent } from './list-tanks.component';

describe('ListTanksComponent', () => {
  let component: ListTanksComponent;
  let fixture: ComponentFixture<ListTanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
