import { APIControllerService } from '../../services/apicontroller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameName: String;

  constructor(private apiController: APIControllerService, private router: Router) { }

  ngOnInit() {
  }

  showResults(gameName) {
    this.apiController.setGame(gameName);
    this.router.navigate([`/result/` + gameName]);
  }

  update(gameInput: string) {
    this.gameName = gameInput;
  }
}
