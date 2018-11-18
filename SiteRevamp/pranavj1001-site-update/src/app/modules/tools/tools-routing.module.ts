import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserNewTabPageComponent } from './components/browser-new-tab-page/browser-new-tab-page.component';

const routes: Routes = [
  {
    path: '',
    component: BrowserNewTabPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
