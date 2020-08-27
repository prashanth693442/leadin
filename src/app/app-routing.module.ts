import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path:'store/index',component:HomepageComponent},
  { path: '', redirectTo: '/store/index', pathMatch: 'full' },
  { path:'login',
  loadChildren: () => import('./login/login/login.module')
  .then(m => m.LoginModule),component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
