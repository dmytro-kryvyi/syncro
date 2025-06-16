import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastOptionsComponent } from './fast-options.component';

describe('FastOptionsComponent', () => {
  let component: FastOptionsComponent;
  let fixture: ComponentFixture<FastOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
