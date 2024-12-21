import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacingComponent } from './finacing.component';

describe('FinacingComponent', () => {
  let component: FinacingComponent;
  let fixture: ComponentFixture<FinacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
