import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-advice-post-detail',
  templateUrl: './advice-post-detail.component.html',
  styleUrls: ['./advice-post-detail.component.css'],
  providers: [PostService]
})
export class AdvicePostDetailComponent implements OnInit {
  id: number;
  postToDisplay: Post;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = parseInt(urlParameters['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.id);
  }

}
