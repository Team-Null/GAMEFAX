import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Main service used by all API components to retreive json data from the backend

@Injectable({
  providedIn: 'root'
})
export class APIControllerService {

  gameName: String;

  constructor(private http: HttpClient) { }

  setGame(gameName) {
    this.gameName = gameName;
  }

  // Contains a respective method for each API Component
  getTwitchData() {
    return this.http.get("/api/twitch/" + this.gameName)
  }

  getYoutubeData() {
    return this.http.get("/api/youtube/" + this.gameName)
  }

  getEbayData() {
    return this.http.get("/api/ebay/" + this.gameName)
  }

  getWalmartData() {
    return this.http.get("/api/walmart/" + this.gameName)
  }
  getTwitterData() {
    return this.http.get("/api/twitter/" + this.gameName)
  }
}
