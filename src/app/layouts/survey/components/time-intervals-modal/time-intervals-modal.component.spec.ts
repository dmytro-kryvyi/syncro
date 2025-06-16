import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalsModalComponent } from './time-intervals-modal.component';

describe('TimeIntervalsModalComponent', () => {
  let component: TimeIntervalsModalComponent;
  let fixture: ComponentFixture<TimeIntervalsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIntervalsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeIntervalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
