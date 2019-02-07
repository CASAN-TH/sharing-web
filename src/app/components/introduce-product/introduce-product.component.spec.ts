import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceProductComponent } from './introduce-product.component';

describe('IntroduceProductComponent', () => {
  let component: IntroduceProductComponent;
  let fixture: ComponentFixture<IntroduceProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
