import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDonateComponent } from './info-donate.component';

describe('InfoDonateComponent', () => {
  let component: InfoDonateComponent;
  let fixture: ComponentFixture<InfoDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
