import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarRComponent } from './shared/components/sidebar-r/sidebar-r.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MassaggesComponent } from './shared/components/massagges/massagges.component';
import { CustomerComponent } from './shared/components/customer/customer.component';
import { CalenderComponent } from './shared/components/calender/calender.component';
import { ContentComponent } from './shared/components/content/content.component';
import { VideosComponent } from './shared/components/videos/videos.component';
import { ListComponent } from './shared/components/list/list.component';
import { CampaignsComponent } from './shared/components/campaigns/campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarRComponent,
    DashboardComponent,
    MassaggesComponent,
    CustomerComponent,
    CalenderComponent,
    ContentComponent,
    VideosComponent,
    ListComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
