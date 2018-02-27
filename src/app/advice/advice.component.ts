import { Component, OnInit } from '@angular/core';
import { Post } from  '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  constructor(private router: Router) { }

  posts: Post[] = [
    new Post("How can I increase sales?", "For now here is a link to an article: http://www.smallbusinessbonfire.com/3-ways-to-use-technology-to-increase-sales/", 1, ""),
    new Post("Working in Sales", "For now here is a link to an article: https://www.recruiter.com/i/3-reasons-to-work-in-sales-for-a-tech-startup/", 2, ""),
    new Post("Sales at a Tech Startup", "For now here is a link to an article: https://www.mergersandinquisitions.com/investment-banking-to-sales-tech-start-up/", 3, "")
  ];


  goToDetailsPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id])
  }

  ngOnInit() {
  }

}
