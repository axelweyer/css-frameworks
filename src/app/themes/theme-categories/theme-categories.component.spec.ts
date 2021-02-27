import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeCategoriesComponent } from './theme-categories.component';

describe('ThemeMenuComponent', () => {
  let component: ThemeCategoriesComponent;
  let fixture: ComponentFixture<ThemeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
