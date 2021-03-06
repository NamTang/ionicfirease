
import { Component } from '@angular/core';


import { MapPage } from "../map/map";
import { ListPage } from "../list/list";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MapPage;
  tab2Root: any = ListPage;


  constructor() {

  }
}