import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-currentevents',
  templateUrl: './currentevents.component.html',
  styleUrls: ['./currentevents.component.css'],
  providers: [EventService]
})
export class CurrenteventsComponent implements OnInit {
  events: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private eventService: EventService) { }


  goToDetailPage(clickedEvent) {
    this.router.navigate(['events', clickedEvent.$key]);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }



}
