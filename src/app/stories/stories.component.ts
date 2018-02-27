import { Component, OnInit } from '@angular/core';
import { Story } from '../stories.model';
import { Router } from '@angular/router';
import { StoryService} from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoryService]
})

export class StoriesComponent implements OnInit {
stories: Story[];

constructor(private router: Router, private storyService: StoryService) { }

goToDetailsPage(clickedStory: Story) {
  this.router.navigate(['stories', clickedStory.id])
}
  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

}
