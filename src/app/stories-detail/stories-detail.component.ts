import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from '../stories.model';
import { StoryService } from '../story.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.css'],
  providers: [StoryService]
})

export class StoriesDetailComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;
  id: string;
  currentRoute: string = this.router.url;
  

  storyToDisplay;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.storyToDisplay = this.storyService.getStoryById(this.id);
        console.log(this.router.url);
  }

  goToEditPage(storyToDisplay) {
    console.log(storyToDisplay);
    this.router.navigate(['stories', storyToDisplay.$key])
  }

}
