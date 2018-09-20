import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InputService {
    // Change this to server location later
    private inputUrl = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }
    // Post request (Send input to server) add httpOptions later
    sendInput(userReq: string): Observable<string> {
        return this.http.post<string>(this.inputUrl, userReq, httpOptions);
    }
}
// Configs for POST, PUT (Optional)
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'text/plain',
    })
}