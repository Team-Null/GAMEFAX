import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
})
export class TestApiComponent implements OnInit {

  testData: Object;

  constructor(private apiData: APIControllerService) { }

  // Calls APICollector service to get testAPI and stores it in testData
  ngOnInit() { 
    this.apiData.getTestData().subscribe(apiData => {
      this.testData = apiData;
    })
  }
}
