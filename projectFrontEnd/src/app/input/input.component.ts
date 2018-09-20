import { Component } from '@angular/core';
import { InputService } from '../input.service';
import {EbayService} from "./ebay.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    userInput = '';
    clickMessage = '';
    response = 'POST confirmed: ';
    repo: any;
    // Added the ebay search method to the constructor
    constructor(private inputService: InputService, private ebayService: EbayService) { }

    // functions
    // Remove later
    onClick() {
        this.clickMessage = "Click event!"
    }
    update(textInput: string) {
        this.userInput = textInput;
        // When the server responds successfully it executes whatever is in the subscribe parameters
        this.inputService.sendInput(textInput).subscribe(userReq => this.response + userReq + ' ' + this.userInput);
        // Takes the text from the search bar and sends it to the search function to return the api call for that game and prints it to the console.
        this.ebayService.search(textInput).subscribe((repo)=>{
          this.repo= repo;
          console.log(this.repo);
        })
    }

}
