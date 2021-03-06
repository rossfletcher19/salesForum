import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-advice-post-detail',
  templateUrl: './advice-post-detail.component.html',
  styleUrls: ['./advice-post-detail.component.css'],
  providers: [PostService]
})
export class AdvicePostDetailComponent implements OnInit {
  id: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.id);
  }

}
