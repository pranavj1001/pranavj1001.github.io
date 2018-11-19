// Angular files
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { CoreRoutingModule } from './core-routing.module';
import { GlobalSharedModule } from '../global-shared-module/global-shared-module.module';

// Custom components
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    GlobalSharedModule
  ]
})
export class CoreModule { }
