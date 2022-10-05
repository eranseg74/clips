import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>; // = new QueryList();
  constructor() {}

  ngOnInit(): void {
    console.log(this.tabs);
  }
  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first); // The '!' mark says that we are confident that the parameter will hold some value and won't be undefined
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    return false; // this is for preventing the default behavior
  }
}
