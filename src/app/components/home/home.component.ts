import { APIControllerService } from '../../services/apicontroller.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, catchError, tap, switchMap } from 'rxjs/operators';

const Url = 'https://www.giantbomb.com/api/search/?api_key=7ff039d89a3179530df0d50d46a5bc8741b4b65f&format=jsonp&query='

@Injectable()
export class Search {
  constructor(private http: HttpClient) {}

  getSearch(input: string) {
    if(input === '') {
      return of([]);
    }
    return this.http.jsonp(Url + input + '&resources=game&field_list=name&json_callback=JSONP_CALLBACK', "callback").pipe(map(res => res["results"]));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [Search]
})

export class HomeComponent implements OnInit {
  model: any;
  searching: boolean = false;
  searchFailed: boolean = false;

  sidebarIsOpened: boolean = false;
  sidebarMode: String = "over";
  sidebarPosition: String = "right";
  sidebarCloseOnClickOutside: boolean = true;
  sidebarAutoCollapse: boolean = true;

  constructor(private searchList: Search, private apiController: APIControllerService, private router: Router) { }
  ngOnInit() {
  }

  showResults(gameName) {
    this.apiController.setGame(gameName.item.name);
    this.router.navigate([`/result/` + gameName.item.name]);
  }

  search = (input: Observable<string>) =>
    input.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(item => item.length < 4 ? []
        : this.searchList.getSearch(item).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )),
        tap(() => this.searching = false)
    )

  formatter = (result: string) => 
    result['name'] || '';

  toggleSidebar() {
    this.sidebarIsOpened = !this.sidebarIsOpened;
  }
}