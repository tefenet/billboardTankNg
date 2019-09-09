import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankHistoryComponent } from './tank-history.component';

describe('TankHistoryComponent', () => {
  let component: TankHistoryComponent;
  let fixture: ComponentFixture<TankHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
