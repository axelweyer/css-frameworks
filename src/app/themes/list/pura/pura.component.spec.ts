import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraComponent } from './pura.component';

describe('PuraComponent', () => {
  let component: PuraComponent;
  let fixture: ComponentFixture<PuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
