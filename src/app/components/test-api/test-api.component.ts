import { Component, OnInit } from '@angular/core';
import { APIControllerService } from '../../services/apicontroller.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
})
export class TestApiComponent implements OnInit {

  testData: Object;

  constructor(private apiController: APIControllerService) { }

  // Calls APICollector service to get testAPI and stores it in testData
  ngOnInit() { 
    this.apiController.getTestData().subscribe(data => {
      this.testData = data;
    })
  }
}
