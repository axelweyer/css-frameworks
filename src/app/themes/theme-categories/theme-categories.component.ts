import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemesService } from '../shared/services/themes.service';
import { ThemesCategories } from './theme-categories.enum';
import { ThemeCategoryModel } from './theme-category.model';

@Component({
    selector: 'app-theme-categories',
    templateUrl: './theme-categories.component.html',
    styleUrls: ['./theme-categories.component.scss']
})
export class ThemeCategoriesComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription = new Subscription();

    public readonly categories: ThemeCategoryModel[] = ThemesCategories;
    public categoriesTheme: string[] = [];
    public categoryActive!: string;

    constructor(private themesService: ThemesService) { }

    ngOnInit(): void {
        const categoriesSub = this.themesService.categoriesList.subscribe((categoriesTheme: string[]) => {
            console.log('categoriesTheme', categoriesTheme)
            this.categoriesTheme = categoriesTheme;
        });
        this.subscriptions.add(categoriesSub);
        const categoryActiveSub = this.themesService.categorySelected.subscribe((categorie: string) => {
            this.categoryActive = categorie;
        });
        this.subscriptions.add(categoryActiveSub);
    }
    
    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public isCategoriesActivated(category: string, isCategory: boolean): boolean {
        return isCategory && this.categoriesTheme.indexOf(category) > -1;
    }

    public selectCategory(categoryKey: string): void {
        this.themesService.emitCategorySelected(categoryKey);
    }
}
