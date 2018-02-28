import { Component, OnInit } from '@angular/core';
import { Post } from  '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css'],
  providers: [PostService]
})
export class AdviceComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private postService: PostService) { }


  goToDetailsPage(clickedPost) {
    this.router.navigate(['posts', clickedPost.$key])
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
