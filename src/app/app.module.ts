import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { AdviceComponent } from './advice/advice.component';
import { AdvicePostDetailComponent } from './advice-post-detail/advice-post-detail.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    AdviceComponent,
    AdvicePostDetailComponent,
    StoriesComponent,
    StoriesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
