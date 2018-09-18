import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputComponent } from './input/input.component';

@Injectable({
    providedIn: 'root'
})
export class InputService {
    messages: string[] = [];
    private inputUrl = 'api/input';
    
    constructor(private http: HttpClient, private inputService: InputService) {

    }
    //private log(message: string) {
    //    this.inputService.add('Service: ${message}')
    //}
    getInput(): Observable<string[]> {
        return this.http.get<string[]>(this.inputUrl)
    }
    ngOnInit() {
        this.getInput();
    }
}