import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraChipsComponent } from './pura-chips.component';

describe('PuraChipsComponent', () => {
  let component: PuraChipsComponent;
  let fixture: ComponentFixture<PuraChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
