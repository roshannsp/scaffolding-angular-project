import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardSkeletonComponent } from './country-card-skeleton.component';

describe('CountryCardSkeletonComponent', () => {
  let component: CountryCardSkeletonComponent;
  let fixture: ComponentFixture<CountryCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
