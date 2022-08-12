import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUploadingComponent } from './seller-uploading.component';

describe('SellerUploadingComponent', () => {
  let component: SellerUploadingComponent;
  let fixture: ComponentFixture<SellerUploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUploadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
