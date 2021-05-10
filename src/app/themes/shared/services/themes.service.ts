import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ThemeModel } from '../models/theme.model';

@Injectable({
    providedIn: 'root',
})
export class ThemesService {

    public themeActive: BehaviorSubject<ThemeModel> = new BehaviorSubject(null as any);
    public categoriesList: BehaviorSubject<string[]> = new BehaviorSubject(null as any);
    public categorySelected: BehaviorSubject<string> = new BehaviorSubject(null as any);

    constructor() { }

    public emitThemeActive(value: ThemeModel) {
        this.themeActive.next(value);
        this.emitCategoriesList(value.categories);
        this.emitCategorySelected('');
    }

    public emitCategoriesList(value: string[]) {
        this.categoriesList.next(value);
    }

    public emitCategorySelected(value: string) {
        this.categorySelected.next(value);
    }
}