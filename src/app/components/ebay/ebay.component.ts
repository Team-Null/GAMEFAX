import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.styl']
})
export class EbayComponent implements OnInit {

  ebayData: Object;
  dataFetched: boolean;

  constructor(private apiController: APIControllerService) { }

  //Gets ebayAPI and stores it into ebayData.
  ngOnInit() {
    this.apiController.getEbayData().subscribe(data => {
      this.ebayData= data["game_info"];
      this.dataFetched = true;
    })
  }
}
