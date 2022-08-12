import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindashbordComponent } from './logindashbord.component';

describe('LogindashbordComponent', () => {
  let component: LogindashbordComponent;
  let fixture: ComponentFixture<LogindashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
