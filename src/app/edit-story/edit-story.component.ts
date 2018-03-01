import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../stories.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  @Input() selectedStory;

  constructor() { }

  ngOnInit() {
  }

}
