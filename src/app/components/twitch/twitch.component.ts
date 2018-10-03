import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css'],
})
export class TwitchComponent implements OnInit {

  twitchData: Object;

  constructor(private apiController: APIControllerService) { }

  // Calls APICollector service to get twitchAPI and stores it in twitchData
  ngOnInit() { 
    this.apiController.getTwitchData().subscribe(data => {
      this.twitchData = data;
    })
  }
}
