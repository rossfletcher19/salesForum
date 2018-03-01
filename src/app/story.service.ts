import { Injectable } from '@angular/core';
import { Story } from './stories.model';
// import { STORIES } from './mock-story';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stories = database.list('stories');
  }

getStories() {
  return this.stories;
}

  getStoryById(id: string){
    return this.database.object('/stories/' + id);
    // for(var i = 0; i <= STORIES.length - 1; i++) {
    //   if (STORIES[i].id === id) {
    //     return STORIES[i];
    //   }
    // }
  }
  updateStory(localUpdateStory){
    var storyEntryInFirebase = this.getStoryById(localUpdateStory.$key);
    storyEntryInFirebase.update({title: localUpdateStory.title, content: localUpdateStory.content,  link: localUpdateStory.link});
  }
}
