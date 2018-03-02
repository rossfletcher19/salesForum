import { Injectable } from '@angular/core';
import { Event } from './event.model';
// import { EVENTS } from './mock-events';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
   }

  getEvents() {
    return this.events;
  }

  getEventById(id: string) {
    return this.database.object('/events/' + id);
    // for (var i = 0; i <= EVENTS.length - 1; i++) {
    //   if (EVENTS[i].id === id) {
    //     return EVENTS[i];
    //   }
    // }
  }
  updateEvent(localUpdateEvent){
    var storyEntryInFirebase = this.getEventById(localUpdateEvent.$key);
    storyEntryInFirebase.update({title: localUpdateEvent.title, content: localUpdateEvent.content,  link: localUpdateEvent.link});
  }
}
