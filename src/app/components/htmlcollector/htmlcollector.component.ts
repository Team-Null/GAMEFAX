import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
  selector: 'app-htmlcollector',
  templateUrl: './htmlcollector.component.html',
  styleUrls: ['./htmlcollector.component.scss']
})
export class HTMLCollectorComponent implements OnInit {

  gameName: String;
  gameWallpaper: Object;

  constructor(private activateRoute: ActivatedRoute, private apiController: APIControllerService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.gameName = params.game;
      //Results page reapplies the game name to the apiController after every page refresh
      this.apiController.setGame(params.game);
      this.apiController.getGameWallpaper().subscribe(data => {
        this.gameWallpaper = data;
      })
    });
  }
}
