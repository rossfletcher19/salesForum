import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Story } from '../stories.model';
import { Event } from '../event.model';
import { Add } from '../add.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(forum: string, title: string, content: string, link: string) {
    let newAdd: Add = new Add(forum);


    if (newAdd.forum === "advice") {
      let newPost: Post = new Post(title, content, link, "");
    } if (newAdd.forum === "story") {
      let newStory: Story = new Story(title, content, link, "");
    } if (newAdd.forum === "currentevent") {
      let newEvent: Event = new Event(title, content, link, "");
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
