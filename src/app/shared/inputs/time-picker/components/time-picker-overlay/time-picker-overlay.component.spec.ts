import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerOverlayComponent } from './time-picker-overlay.component';

describe('TimePickerOverlayComponent', () => {
  let component: TimePickerOverlayComponent;
  let fixture: ComponentFixture<TimePickerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePickerOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
