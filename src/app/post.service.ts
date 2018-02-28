import { Injectable } from '@angular/core';
import { Post } from './post.model';
// import { POSTS } from './mock-posts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
   }

  getPosts() {
    return this.posts;
  }

  getPostById(id: string) {
    return this.database.object('/posts/' + id);
    // for (var i = 0; i <= POSTS.length - 1; i++) {
    //   if (POSTS[i].id === id) {
    //     return POSTS[i];
    //   }
    // }
  }

}
