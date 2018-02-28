import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  id: string;
  eventToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.eventToDisplay = this.eventService.getEventById(this.id);
  }

}
