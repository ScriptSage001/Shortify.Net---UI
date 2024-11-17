import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './main/dashboard.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { CreateLinkModalComponent } from './create-link-modal/create-link-modal.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    LinkCardComponent,
    CreateLinkModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
