import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})
export class EditEventComponent implements OnInit {
    @Input() selectedEvent;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {

  }

  beginUpdatingEvent(eventToUpdate){
    this.eventService.updateEvent(eventToUpdate);
  }
}
