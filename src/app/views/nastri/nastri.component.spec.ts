import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NastriComponent } from './nastri.component';

describe('NastriComponent', () => {
  let component: NastriComponent;
  let fixture: ComponentFixture<NastriComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NastriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
