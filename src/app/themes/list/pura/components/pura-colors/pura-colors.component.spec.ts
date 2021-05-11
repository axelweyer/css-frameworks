import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraColorsComponent } from './pura-colors.component';

describe('PuraColorsComponent', () => {
  let component: PuraColorsComponent;
  let fixture: ComponentFixture<PuraColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
