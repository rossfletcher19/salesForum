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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [PostService, StoryService, EventService]
})
export class DeleteComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, postService: PostService, private storyService: StoryService, private eventService: EventService) { }

  ngOnInit() {
  }

}
