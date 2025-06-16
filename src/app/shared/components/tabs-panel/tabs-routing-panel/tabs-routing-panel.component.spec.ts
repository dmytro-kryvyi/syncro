import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRoutingPanelComponent } from './tabs-routing-panel.component';

describe('TabsRoutingPanelComponent', () => {
  let component: TabsRoutingPanelComponent;
  let fixture: ComponentFixture<TabsRoutingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsRoutingPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsRoutingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
