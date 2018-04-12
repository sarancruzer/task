import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { LandingComponent } from './component/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/landing' },
  {path: '', component: FullLayoutComponent, data: {title: 'Home'},
  children: [
    {path: 'landing', component: LandingComponent, data: {title: 'landing'} }

    ]
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
