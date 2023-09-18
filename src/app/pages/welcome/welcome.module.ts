import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzPageHeaderModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
