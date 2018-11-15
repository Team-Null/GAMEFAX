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
  iconImage: string;

  constructor(private apiController: APIControllerService) { }

  ngOnInit() {
    this.apiController.getRedditData().subscribe(data =>{
      this.redditData= data;
      this.redditDataSearch= data["data"];
      this.redditDataSub= data["sub"];
      this.assignImage();
    })
  }

  assignImage(){
    if(this.redditDataSub[0].data.icon_img!= ""){
      this.iconImage= this.redditDataSub[0].data.icon_img;
    }
    else if(this.redditDataSub[0].data.community_icon!= ""){
      this.iconImage= this.redditDataSub[0].data.community_icon;
    }
    else{
      this.iconImage= "https://www.redditstatic.com/new-icon.png";
    }
  }

}
