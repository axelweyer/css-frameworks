import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ThemeModel } from '../models/theme.model';

@Injectable({
    providedIn: 'root',
})
export class ThemesService {

    public themeActive: BehaviorSubject<ThemeModel> = new BehaviorSubject(null as any);
    public categoriesList: Subject<string[]> = new Subject();
    public categoryActive: Subject<string> = new Subject();

    constructor() { }

    public emitThemeActive(value: ThemeModel) {
        this.themeActive.next(value);
        this.emitCategoriesList(value.categories);
        this.emitCategoryActive('');
    }

    public emitCategoriesList(value: string[]) {
        this.categoriesList.next(value);
    }

    public emitCategoryActive(value: string) {
        this.categoryActive.next(value);
    }
}