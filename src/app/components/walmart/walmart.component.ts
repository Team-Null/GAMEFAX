import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-walmart',
  templateUrl: './walmart.component.html',
  styleUrls: ['./walmart.component.styl']
})
export class WalmartComponent implements OnInit {

  walmartData: Object;

  constructor(private apiController: APIControllerService) { }

  //Gets walmartAPI and stores it into walmartData.
  ngOnInit() {
    this.apiController.getWalmartData().subscribe(data => {
      this.walmartData = data['game_info'];
    })
  }

}
