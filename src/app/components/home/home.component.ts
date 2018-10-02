import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  game: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showResults(game) {
    console.log("showResults method with game: " + game);
    this.router.navigate([`/result/` + game]);
  }

  update(gameInput: string) {
    this.game = gameInput;
  }
}
