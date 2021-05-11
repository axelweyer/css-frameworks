import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuraTablesComponent } from './pura-tables.component';

describe('PuraTablesComponent', () => {
  let component: PuraTablesComponent;
  let fixture: ComponentFixture<PuraTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuraTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuraTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
