import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicePostDetailComponent } from './advice-post-detail.component';

describe('AdvicePostDetailComponent', () => {
  let component: AdvicePostDetailComponent;
  let fixture: ComponentFixture<AdvicePostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicePostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
