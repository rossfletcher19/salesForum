import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenteventsComponent } from './currentevents.component';

describe('CurrenteventsComponent', () => {
  let component: CurrenteventsComponent;
  let fixture: ComponentFixture<CurrenteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
