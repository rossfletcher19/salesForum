import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Story } from '../stories.model';
import { StoryService } from '../story.service';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService, StoryService, EventService]
})

export class AdminComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private postService: PostService, private storyService: StoryService, private eventService: EventService) { }

  ngOnInit() {
    this.stories = this.storyService.getStories();
    this.events = this.eventService.getEvents();
  }

  goToStoryPage(clickedStory, clickedEvent) {
    this.router.navigate(['stories', clickedStory.$key]);
    this.router.navigate(['events', clickedEvent.$key]);
  }

  goToDetailsPage(clickedEvent) {
    this.router.navigate(['events', clickedEvent.$key])
  }


  beginDeletingStory(story){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.storyService.deleteStory(story);
      console.log(story);
    }
  }
}
