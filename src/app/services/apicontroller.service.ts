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
  getTestData() {
    return this.http.get("/api/test/" + this.gameName)
  }

  getTwitchData() {
    return this.http.get("/api/twitch/" + this.gameName)
  }
<<<<<<< HEAD
}
=======

  getYoutubeData() {
    return this.http.get("/api/youtube/" + this.gameName)
  }

  getEbayData() {
    return this.http.get("/api/ebay/" + this.gameName)
  }
}
>>>>>>> caeb96b8edf089e92e1c16bd6f7e2f43ae06f910
