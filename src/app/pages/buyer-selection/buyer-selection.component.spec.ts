import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSelectionComponent } from './buyer-selection.component';

describe('BuyerSelectionComponent', () => {
  let component: BuyerSelectionComponent;
  let fixture: ComponentFixture<BuyerSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
