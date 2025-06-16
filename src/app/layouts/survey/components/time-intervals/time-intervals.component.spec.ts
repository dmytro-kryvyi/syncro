import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalsComponent } from './time-intervals.component';

describe('TimeIntervalsComponent', () => {
  let component: TimeIntervalsComponent;
  let fixture: ComponentFixture<TimeIntervalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIntervalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
