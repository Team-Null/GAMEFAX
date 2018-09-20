import { Component } from '@angular/core';
import { InputService } from '../input.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    userInput = '';
    clickMessage = '';
    response = 'POST confirmed: ';
    constructor(private inputService: InputService) { }

    // functions
    // Remove later
    onClick() {
        this.clickMessage = "Click event!"
    }
    update(textInput: string) {
        this.userInput = textInput;
        // When the server responds successfully it executes whatever is in the subscribe parameters
        this.inputService.sendInput(textInput).subscribe(userReq => this.response + userReq + ' ' + this.userInput);
    }

}