import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysMatrixSelectorComponent } from './days-matrix-selector.component';

describe('DaysMatrixSelectorComponent', () => {
  let component: DaysMatrixSelectorComponent;
  let fixture: ComponentFixture<DaysMatrixSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysMatrixSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysMatrixSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
