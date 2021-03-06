import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdviceComponent } from './advice/advice.component';
import { AdvicePostDetailComponent } from './advice-post-detail/advice-post-detail.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
import { CurrenteventsComponent } from './currentevents/currentevents.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditStoryComponent } from './edit-story/edit-story.component';



const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
   path: 'about',
   component: AboutComponent
 },
 {
   path: 'advice',
   component: AdviceComponent
 },
 {
   path: 'posts/:id',
   component: AdvicePostDetailComponent
 },
 {
   path: 'stories',
   component: StoriesComponent
 },
 {
   path: 'stories/:id',
   component: StoriesDetailComponent
 },
 {
   path: 'currentevents',
   component: CurrenteventsComponent
 },
 {
   path: 'events/:id',
   component: EventDetailComponent
 },
 {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'app-edit-story',
    component: EditStoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
