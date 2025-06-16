import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPublishedComponent } from './event-published.component';

describe('EventPublishedComponent', () => {
  let component: EventPublishedComponent;
  let fixture: ComponentFixture<EventPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPublishedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
