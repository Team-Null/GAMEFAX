import { Component, OnInit } from '@angular/core';
import { TestApiService } from '../../services/test-api.service'

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
  providers: [TestApiService]
})
export class TestApiComponent implements OnInit {

  posts: any = [];

  constructor(private testApiService: TestApiService) { }

  ngOnInit() { 
    this.testApiService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
