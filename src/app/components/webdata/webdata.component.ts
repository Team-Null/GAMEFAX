import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
    selector: 'app-webdata',
    templateUrl: './webdata.component.html',
    styleUrls: ['./webdata.component.scss']
})
export class WebdataComponent implements OnInit {
    webdata: any;

    constructor(private apiController: APIControllerService) { }

    ngOnInit() {
        this.apiController.getWebdata().subscribe(data => {
            this.webdata = data;
        })
    }
}