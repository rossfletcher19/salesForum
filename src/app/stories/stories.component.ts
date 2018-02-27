import { Component, OnInit } from '@angular/core';
import { Story } from '../stories.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})

export class StoriesComponent implements OnInit {


constructor(private router: Router) { }
stories: Story[] = [
  new Story("My Day", "Look at all the awesome things I did today", 1, ""),
  new Story("At the Beach", "The waves, the sand, and the food", 2, ""),
  new Story("At the Mountain", "It snowed a lot", 3, "")
];

goToDetailsPage(clickedStory: Story) {
  this.router.navigate(['stories', clickedStory.id])
}
  ngOnInit() {
  }

}
