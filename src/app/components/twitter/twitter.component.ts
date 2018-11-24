import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
    selector: 'app-twitter',
    templateUrl: './twitter.component.html',
    styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
    twitterData: Object;
    gameName: String;
    
    constructor(private apiController: APIControllerService) {}

    ngOnInit() {
        this.apiController.getTwitterData().subscribe(data => {
            this.twitterData = data;
            this.gameName = data["game"];
        })
    }
}