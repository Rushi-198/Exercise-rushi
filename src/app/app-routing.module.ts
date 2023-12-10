import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MassaggesComponent } from './shared/components/massagges/massagges.component';
import { CustomerComponent } from './shared/components/customer/customer.component';
import { CalenderComponent } from './shared/components/calender/calender.component';
import { ListComponent } from './shared/components/list/list.component';
import { VideosComponent } from './shared/components/videos/videos.component';
import { ContentComponent } from './shared/components/content/content.component';
import { CampaignsComponent } from './shared/components/campaigns/campaigns.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'msg', component: MassaggesComponent
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'calender', component: CalenderComponent
  },
  {
    path: 'campaigns', component: CampaignsComponent
  },
  {
    path: 'content', component: ContentComponent
  },
  {
    path: 'videos', component: VideosComponent
  },
  {
    path: 'lists', component: ListComponent
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
