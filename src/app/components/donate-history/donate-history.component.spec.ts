import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateHistoryComponent } from './donate-history.component';

describe('DonateHistoryComponent', () => {
  let component: DonateHistoryComponent;
  let fixture: ComponentFixture<DonateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
