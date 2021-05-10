import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraTitlesComponent } from './pura-titles.component';

describe('PuraTitlesComponent', () => {
  let component: PuraTitlesComponent;
  let fixture: ComponentFixture<PuraTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
