import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})

export class EventDetailComponent implements OnInit {
  events: FirebaseListObservable<any[]>;
  id: string;
  currentRoute: string = this.router.url;
  eventToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.eventToDisplay = this.eventService.getEventById(this.id);
  }

  goToEditPage(eventToDisplay) {
    console.log(eventToDisplay);
    this.router.navigate(['events', eventToDisplay.$key])
  }

}
