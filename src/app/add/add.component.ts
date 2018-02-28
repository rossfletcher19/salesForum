import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Story } from '../stories.model';
import { Event } from '../event.model';
import { Add } from '../add.model';
import { PostService } from '../post.service';
import { StoryService } from '../story.service';
import { EventService } from '../event.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AddService } from '../add.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AddService]
})

export class AddComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit() {
  }

  submitForm(forum: string, title: string, content: string, link: string) {
    let newAdd: Add = new Add(forum);


    if (newAdd.forum === "advice") {
      let newPost: Post = new Post(title, content, link, "");
      this.addService.addPost(newPost);
      console.log(newPost);
    } if (newAdd.forum === "story") {
      let newStory: Story = new Story(title, content, link, "");
      this.addService.addStory(newStory);
    } if (newAdd.forum === "currentevent") {
      let newEvent: Event = new Event(title, content, link, "");
      this.addService.addEvent(newEvent);
      console.log(newEvent);
    } else {
      console.log("End of If Statement");
    }


  //   if ()
  //   var newAlbum: Album = new Album(title, artist, description);
  //   console.log(newAlbum);
  // }
  }

}
