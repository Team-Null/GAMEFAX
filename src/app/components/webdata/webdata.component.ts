import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
    selector: 'app-webdata',
    templateUrl: './webdata.component.html',
    styleUrls: ['./webdata.component.scss']
})
export class WebdataComponent implements OnInit {
    gameImgSrc: any;
    gameDesc: any;
    gameInfo: any;
    gameReviews: any;
    webdata: any;
    constructor(private apiController: APIControllerService) { }

    ngOnInit() {
        this.apiController.getWebdata().subscribe(data => {
            this.webdata = data;
            this.gameImgSrc = data[3];
            this.gameDesc = data[2];
            this.gameInfo = data[1];
            this.gameReviews = data[0];
        })
    }
}