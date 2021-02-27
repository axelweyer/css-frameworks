import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraButtonsComponent } from './pura-buttons.component';

describe('PuraButtonsComponent', () => {
  let component: PuraButtonsComponent;
  let fixture: ComponentFixture<PuraButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
