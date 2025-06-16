import { NgClass } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from 'app/shared/components/tabs-panel/components/tab/tab.component';

@Component({
  selector: 'syncro-tabs-panel',
  templateUrl: './tabs-routing-panel.component.html',
  styleUrl: './tabs-routing-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class TabsRoutingPanelComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active());

    if (activeTabs.length === 0 && this.tabs.first) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach((t) => t.active.set(false));
    tab.active.set(true);
  }
}
