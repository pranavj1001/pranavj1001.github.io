import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home'
  },
  {
    path: 'home',
    loadChildren: 'src/app/modules/core/core.module#CoreModule'
  },
  {
    path: 'tools',
    loadChildren: 'src/app/modules/tools/tools.module#ToolsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
