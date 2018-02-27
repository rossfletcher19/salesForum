import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from '../stories.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.css'],
  providers: [StoryService]
})

export class StoriesDetailComponent implements OnInit {
  id: number;
  storyToDisplay: Story;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.id);
  }

}
