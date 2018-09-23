import { Component, OnInit } from '@angular/core';
import { APICollectorService } from '../../services/apicollector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
})
export class TwitchComponent implements OnInit {

  twitchData: Object;

  constructor(private apiData: APICollectorService) { }

  // Calls APICollector service to get twitchAPI and stores it in twitchData
  ngOnInit() { 
    this.apiData.getTwitchData().subscribe(apiData => {
      this.twitchData = apiData;
    })
  }
}
