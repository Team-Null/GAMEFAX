import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EbayService {
  // Ebay Api to search for any videoGame in the videoGame category
  apiRoot = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=AronHubb-gamefax-PRD-8820665a8-b817d790&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=1&keywords=';
  apiEnd= '&categoryId=139973&descriptionSearch=true';

  constructor(private http: HttpClient) { }

  ebaySearch(userReq: string): Observable<string> {
    // Takes the userReq and puts it in the api to search for the game and returns the api as plain text.
    return this.http.get(this.apiRoot + userReq + this.apiEnd, {responseType: 'text'});
  }
}
