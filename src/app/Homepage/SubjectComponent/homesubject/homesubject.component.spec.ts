import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesubjectComponent } from './homesubject.component';

describe('HomesubjectComponent', () => {
  let component: HomesubjectComponent;
  let fixture: ComponentFixture<HomesubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesubjectComponent]
    });
    fixture = TestBed.createComponent(HomesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
