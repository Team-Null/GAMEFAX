import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLCollectorComponent } from './htmlcollector.component';

describe('HTMLCollectorComponent', () => {
  let component: HTMLCollectorComponent;
  let fixture: ComponentFixture<HTMLCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
