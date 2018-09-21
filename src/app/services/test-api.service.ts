import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get('/test').pipe(map(posts => {
      return posts;
    }))
  }
}
