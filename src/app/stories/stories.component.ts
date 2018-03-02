import { Component, OnInit } from '@angular/core';
import { Story } from '../stories.model';
import { Router } from '@angular/router';
import { StoryService} from '../story.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoryService]
})

export class StoriesComponent implements OnInit {
stories: FirebaseListObservable<any[]>;
currentRoute: string = this.router.url;

constructor(private router: Router, private storyService: StoryService) { }

goToDetailsPage(clickedStory) {
  this.router.navigate(['stories', clickedStory.$key])
}
  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

}
