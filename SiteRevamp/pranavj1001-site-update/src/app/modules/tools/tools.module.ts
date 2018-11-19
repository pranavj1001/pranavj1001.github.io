import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { BrowserNewTabPageComponent } from './components/browser-new-tab-page/browser-new-tab-page.component';

@NgModule({
  declarations: [BrowserNewTabPageComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
