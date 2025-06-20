import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSelectorComponent } from './calendar-selector.component';

describe('CalendarSelectorComponent', () => {
  let component: CalendarSelectorComponent;
  let fixture: ComponentFixture<CalendarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
