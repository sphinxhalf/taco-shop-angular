import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AboutLTSComponent } from './about-lts/about-lts.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutLTSComponent },
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NzPageHeaderModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
