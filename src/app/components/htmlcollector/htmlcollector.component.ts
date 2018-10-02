import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-htmlcollector',
  templateUrl: './htmlcollector.component.html',
  styleUrls: ['./htmlcollector.component.css']
})
export class HTMLCollectorComponent implements OnInit {

  game: String;

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.game = params.game;
    });
  }
}
