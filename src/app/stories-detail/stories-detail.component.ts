import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.css']
})
export class StoriesDetailComponent implements OnInit {
  storyId: number = null;
  constructor() { }

  ngOnInit() {
  }

}
