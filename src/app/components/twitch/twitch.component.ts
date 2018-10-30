import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss'],
})
export class TwitchComponent implements OnInit {

  twitchData: Object;
  twitchDataStreams: Object;

  constructor(private apiController: APIControllerService) { }

  // Calls APICollector service to get twitchAPI and stores it in twitchData
  ngOnInit() { 
    this.apiController.getTwitchData().subscribe(data => {
      //Store entire JSON object into twitchData which includes "game_name" and "game_id"
      this.twitchData = data;
      //Store only Streams[] array from JSON into twitchDataStreams[] so *ngFor, which needs an Array, works on the HTML page
      //twitchDataStreams does not include "game_name" and "game_id", only "streams": []
      this.twitchDataStreams = data["streams"];
    })
  }
}
