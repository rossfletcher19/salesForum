import { Component, OnInit } from '@angular/core';
import { Post } from  '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css'],
  providers: [PostService]
})
export class AdviceComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private postService: PostService) { }


  goToDetailsPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id])
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
