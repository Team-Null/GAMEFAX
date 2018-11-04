import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
    selector: 'app-webdata',
    templateUrl: './webdata.component.html',
    styleUrls: ['./webdata.component.scss']
})
export class WebdataComponent implements OnInit {
    webdataData: Object;
    
    constructor(private apiController: APIControllerService) { }

    ngOnInit() {
        this.apiController.getWebdataData().subscribe(data => {
            this.webdataData[0] = data;
        })
    }
}