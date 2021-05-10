import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraLinksComponent } from './pura-links.component';

describe('PuraLinksComponent', () => {
  let component: PuraLinksComponent;
  let fixture: ComponentFixture<PuraLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
