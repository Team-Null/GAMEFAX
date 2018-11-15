import { Component, OnInit } from '@angular/core';
import {APIControllerService} from '../../services/apicontroller.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {

  redditData: Object;
  redditDataSearch: Object;
  redditDataSub: Object;

  constructor(private apiController: APIControllerService) { }

  ngOnInit() {
    this.apiController.getRedditData().subscribe(data =>{
      this.redditData= data;
      this.redditDataSearch= data["data"];
      this.redditDataSub= data["sub"];
    })
  }

}
