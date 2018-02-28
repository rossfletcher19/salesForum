import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Event } from './event.model';
import { Story } from './stories.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AddService {
  posts: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  stories: FirebaseListObservable<any[]>;



  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
    this.events = database.list('events');
    this.stories = database.list('stories');
  }

  getPosts() {
    return this.posts;
  }

  getEvents() {
    return this.events;
  }

  getStories() {
    return this.stories;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  addStory(newStory: Story) {
    this.stories.push(newStory);
  }

  getPostById(postId: string) {
  return this.database.object('/posts/' + postId);
  }

  getEventById(eventId: string) {
  return this.database.object('/events/' + eventId);
  }

  getStoryById(storyId: string) {
  return this.database.object('/stories/' + storyId);
  }

  // updateAlbum(localUpdatedAlbum){
  //   var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
  //   albumEntryInFirebase.update({title: localUpdatedAlbum.title, artist: localUpdatedAlbum.artist, description: localUpdatedAlbum.description, genre: localUpdatedAlbum.genre});
  // }
  //
  // deleteAlbum(localAlbumToDelete){
  //   var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
  //   albumEntryInFirebase.remove();
  // }

}
