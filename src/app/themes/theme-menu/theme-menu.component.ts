import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../shared/services/themes.service';
import { ThemesCategories } from './theme-categories.enum';
import { ThemeCategoryModel } from './theme-category.model';

@Component({
    selector: 'app-theme-menu',
    templateUrl: './theme-menu.component.html',
    styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent implements OnInit {

    public readonly categories: ThemeCategoryModel[] = ThemesCategories;
    public categoriesTheme: string[] = [];
    public categoryActive!: string;

    constructor(private themesService: ThemesService) { }

    ngOnInit(): void {
        this.themesService.categoriesList.subscribe((categoriesTheme: string[]) => {
            this.categoriesTheme = categoriesTheme;
        });
        this.themesService.categoryActive.subscribe((categorie: string) => {
            this.categoryActive = categorie;
        });
    }

    public isCategoriesActivated(category: string, isCategory: boolean): boolean {
        return isCategory && this.categoriesTheme.indexOf(category) > -1;
    }
}
