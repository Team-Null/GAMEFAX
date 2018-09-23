import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Main service used by all API components to retreive json data from the backend

@Injectable({
  providedIn: 'root'
})
export class APICollectorService {

  constructor(private http: HttpClient) { }

  // Contains a respective method for each API Component
  getTestData() {
    return this.http.get("/api/test")
  }

  getTwitchData() {
    return this.http.get("/api/twitch")
  }
}
