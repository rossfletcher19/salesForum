import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdviceComponent } from './advice/advice.component';
import { AdvicePostDetailComponent } from './advice-post-detail/advice-post-detail.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
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
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
