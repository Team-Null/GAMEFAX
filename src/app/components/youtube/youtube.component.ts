import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.styl']
})
export class YoutubeComponent implements OnInit {

  youtubeData: Object;
  youtubeDataVideos: Object;

  constructor(private apiController: APIControllerService) { }

  // Calls APICollector service to get twitchAPI and stores it in twitchData
  ngOnInit() { 
    this.apiController.getYoutubeData().subscribe(data => {
      this.youtubeData = data;
      this.youtubeDataVideos = data["items"];
    })
  }
}

