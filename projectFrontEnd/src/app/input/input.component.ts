import { Component } from '@angular/core';
import { InputService } from '../input.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})

export class InputComponent {
    userInput = '';
    clickMessage = '';

    // functions
    onClick() {
        this.clickMessage = "click event"
        // take input, add to here
    }
    update(value: string) {
        this.userInput = value;
    }

}