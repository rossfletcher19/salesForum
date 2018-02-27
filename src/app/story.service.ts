import { Injectable } from '@angular/core';
import { Story } from './stories.model';
import { STORIES } from './mock-story';


@Injectable()
export class StoryService {

  constructor() { }

getStories() {
  return STORIES;
}

  getStoryById(id: number){
    for(var i = 0; i <= STORIES.length - 1; i++) {
      if (STORIES[i].id === id) {
        return STORIES[i];
      }
    }
  }
}
