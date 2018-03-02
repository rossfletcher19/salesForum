import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css'],
  providers: [StoryService]
})
export class EditStoryComponent implements OnInit {
  @Input() selectedStory;


  constructor(private router: Router, private storyService: StoryService) { }

  ngOnInit() {

  }

  beginUpdatingStory(storyToUpdate){
    this.storyService.updateStory(storyToUpdate);
  }


}
