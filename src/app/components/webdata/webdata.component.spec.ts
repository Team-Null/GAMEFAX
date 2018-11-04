import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WebdataComponent } from './webdata.component';

describe('WebdataComponent', () => {
  let component: WebdataComponent;
  let fixture: ComponentFixture<WebdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});