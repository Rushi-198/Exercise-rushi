import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'Dashboard1', component: AppComponent
  // },
  // {
  //   path: 'Classes', component: ClassesComponent
  // },
  // {
  //   path: 'Resources', component: ResourcesComponent
  // },
  // {
  //   path: 'LearningPlan', component: LearningPlanComponent
  // },
  // {
  //   path: 'Chat', component: ChatComponent
  // },
  // {
  //   path: 'Settings', component: SettingComponent
  // },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
