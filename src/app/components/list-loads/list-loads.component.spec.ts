import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadsComponent } from './list-loads.component';

describe('ListLoadsComponent', () => {
  let component: ListLoadsComponent;
  let fixture: ComponentFixture<ListLoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
