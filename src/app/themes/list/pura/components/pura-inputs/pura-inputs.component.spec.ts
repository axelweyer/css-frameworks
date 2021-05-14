import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraInputsComponent } from './pura-inputs.component';

describe('PuraInputsComponent', () => {
  let component: PuraInputsComponent;
  let fixture: ComponentFixture<PuraInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
